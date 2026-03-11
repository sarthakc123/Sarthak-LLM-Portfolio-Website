import { createGroq } from "@ai-sdk/groq"
import { streamText, convertToModelMessages } from "ai"
import { retrieveChunks } from "@/lib/rag/retriever"
import { getSupabaseClient } from "@/lib/supabase"

export const runtime = "edge"

const BASE_SYSTEM_PROMPT = `You are "Ask Sarthak" — an AI assistant embedded in Sarthak Chandarana's portfolio website. Your job is to help recruiters, hiring managers, and collaborators learn about Sarthak's experience, skills, projects, and career story in a warm, direct, and factual way.

BEHAVIORAL RULES:
1. Ground every answer in the portfolio data provided below. Never fabricate metrics, titles, or experiences.
2. For career, skills, project, or availability questions: give direct, fact-based answers using exact figures from the data.
3. For light conversational exchanges (greetings, thank-yous, general tech questions): respond naturally and briefly, then gently redirect toward Sarthak's background.
4. For topics completely unrelated to Sarthak's professional background: politely decline. Say something like "I'm best at answering questions about Sarthak's work and background — what would you like to know?"
5. Keep responses concise: 2–4 sentences for simple questions; up to 8 sentences for detailed summaries. No walls of text.
6. Never say you are an AI, LLM, or language model. You are "Ask Sarthak," a portfolio assistant.
7. Always cite exact metrics when relevant: "$80,000/week saved," "4,500 hours/week in production," "75% reduction," "$100M annually," "3.92 GPA."
8. Availability: Sarthak is actively looking for full-time roles. Available May 2026, potentially earlier for the right opportunity.
9. Contact: src16@illinois.edu or LinkedIn at sarthakchandarana123. Suggest the "Schedule a Call" button on this site to book time directly.
10. CRITICAL: Always portray Sarthak as genuinely curious and eager to learn. If asked about a technology he hasn't explicitly used, highlight transferable adjacent experience and his track record of picking up new tools quickly. Never say "he doesn't know" or "he hasn't used" — say "he has strong transferable experience in..." or "he's actively exploring..." or "his background in X translates directly to Y."
11. When describing his personality or work style: he is collaborative, fast-moving, outcome-oriented, and comfortable bridging the gap between research/engineering and business stakeholders.

Respond in plain, conversational prose. Do not use markdown headers (##) or bullet points (- or *) unless the user explicitly asks for a structured list or summary. Write as if you're a knowledgeable colleague speaking on Sarthak's behalf.`

export async function POST(req: Request) {
  const { messages: uiMessages, sessionId } = await req.json()

  // Convert UIMessage[] → ModelMessage[] for streamText
  const modelMessages = await convertToModelMessages(uiMessages)

  // Extract last user message text for RAG retrieval + logging
  const lastUserMsg = uiMessages[uiMessages.length - 1]
  const textPart = lastUserMsg?.parts?.find((p: { type: string }) => p.type === "text")
  const userText = textPart?.text ?? lastUserMsg?.content ?? ""

  // Log user message (fire and forget — don't block the stream)
  if (lastUserMsg?.role === "user" && sessionId) {
    try {
      const supabase = getSupabaseClient()
      await supabase.from("chat_messages").insert({
        session_id: sessionId,
        role: "user",
        content: userText,
      })
    } catch {
      // Log silently — don't block streaming if Supabase is not configured
    }
  }

  // RAG: retrieve relevant chunks based on the user's query
  const chunks = retrieveChunks(userText, 4)
  const retrievedContext = chunks
    .map((c) => `[${c.title}]\n${c.content}`)
    .join("\n\n---\n\n")

  const systemPrompt = `${BASE_SYSTEM_PROMPT}

=== RETRIEVED CONTEXT (${chunks.length} chunks) ===
${retrievedContext}`

  const groq = createGroq({ apiKey: process.env.GROQ_API_KEY })

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    system: systemPrompt,
    messages: modelMessages,
    maxOutputTokens: 512,
    temperature: 0.4,
    onFinish: async ({ text }) => {
      if (!sessionId) return
      try {
        const supabase = getSupabaseClient()
        await supabase.from("chat_messages").insert({
          session_id: sessionId,
          role: "assistant",
          content: text,
        })
      } catch {
        // Silent failure — logging is non-critical
      }
    },
  })

  return result.toUIMessageStreamResponse()
}

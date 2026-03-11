import { RESUME_CHUNKS, type ResumeChunk } from "./chunks"

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
  "have", "has", "had", "do", "does", "did", "will", "would", "could",
  "should", "may", "might", "shall", "can", "need", "dare", "ought",
  "in", "on", "at", "to", "for", "of", "with", "by", "from", "up",
  "about", "into", "through", "during", "before", "after", "above",
  "below", "between", "out", "off", "over", "under", "then", "once",
  "and", "but", "or", "nor", "so", "yet", "both", "either", "neither",
  "not", "no", "nor", "too", "very", "just", "what", "how", "when",
  "where", "who", "which", "that", "this", "these", "those", "i", "me",
  "my", "we", "our", "you", "your", "he", "she", "it", "they", "them",
  "his", "her", "its", "their", "tell", "me", "us", "give", "more",
  "any", "some", "such", "than", "also", "if", "as", "its",
])

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9$\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t))
}

function scoreChunk(chunk: ResumeChunk, queryTokens: string[]): number {
  if (queryTokens.length === 0) return 0

  const contentLower = chunk.content.toLowerCase()
  const titleLower = chunk.title.toLowerCase()

  let score = 0
  for (const token of queryTokens) {
    // +2 per token found in content
    if (contentLower.includes(token)) score += 2
    // +3 per token found in keywords
    if (chunk.keywords.some((kw) => kw.includes(token) || token.includes(kw))) score += 3
    // +5 if token appears in title
    if (titleLower.includes(token)) score += 5
  }
  return score
}

export function retrieveChunks(query: string, topK = 4): ResumeChunk[] {
  const queryTokens = tokenize(query)

  // Personal chunk is always included (contact/availability always relevant)
  const personal = RESUME_CHUNKS.find((c) => c.id === "personal")!

  if (queryTokens.length === 0) {
    // No meaningful query: return personal + standout + target-roles + skills-ai
    return [
      personal,
      RESUME_CHUNKS.find((c) => c.id === "standout")!,
      RESUME_CHUNKS.find((c) => c.id === "target-roles")!,
      RESUME_CHUNKS.find((c) => c.id === "skills-ai")!,
    ]
  }

  const scored = RESUME_CHUNKS.filter((c) => c.id !== "personal").map((chunk) => ({
    chunk,
    score: scoreChunk(chunk, queryTokens),
  }))

  scored.sort((a, b) => b.score - a.score)

  const topChunks = scored.slice(0, topK - 1).map((s) => s.chunk)

  // Deduplicate and prepend personal
  const seen = new Set<string>([personal.id])
  const result: ResumeChunk[] = [personal]
  for (const chunk of topChunks) {
    if (!seen.has(chunk.id)) {
      seen.add(chunk.id)
      result.push(chunk)
    }
  }

  return result
}

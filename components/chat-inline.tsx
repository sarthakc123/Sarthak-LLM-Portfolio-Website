"use client"

import { useChat } from "@ai-sdk/react"
import { Chat as AiChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useRef, useEffect, useState, useCallback } from "react"
import { User, Send, Loader2, Sparkles, Download, Mic, MicOff, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AiAvatar, type AvatarState } from "@/components/ai-avatar"

const QUICK_ACTIONS = [
  "What makes Sarthak stand out?",
  "Tell me about the $80K/week project",
  "What roles is Sarthak targeting?",
  "Summarize his AI tech stack",
  "When is he available?",
  "What's his biggest career impact?",
]

const WELCOME_PART = {
  type: "text" as const,
  text: "Hi! I'm Sarthak's AI assistant. Sarthak is a Software and AI Engineer who translates AI into visible impact, from building Baioniq (saving 4,500 hours/week in production) to automating science at a molecular research lab. Ask me anything about his career, or try a quick action below.",
}

export function ChatInline() {
  const [sessionId] = useState(() => crypto.randomUUID())
  const [inputValue, setInputValue] = useState("")
  const [avatarState, setAvatarState] = useState<AvatarState>("idle")
  const [autoPlay, setAutoPlay] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [speakingMsgId, setSpeakingMsgId] = useState<string | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const prevStatusRef = useRef<string>("")

  const [chat] = useState(
    () =>
      new AiChat({
        messages: [{ id: "welcome", role: "assistant" as const, parts: [WELCOME_PART] }],
        transport: new DefaultChatTransport({ api: "/api/chat", body: { sessionId } }),
      })
  )

  const { messages, sendMessage, status } = useChat({ chat })
  const isLoading = status === "submitted" || status === "streaming"

  useEffect(() => {
    const el = scrollContainerRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages])

  /* ── TTS ── */
  const speakText = useCallback(async (text: string, msgId: string) => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    setSpeakingMsgId(msgId)
    setAvatarState("speaking")
    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      })
      if (!res.ok) { setAvatarState("idle"); setSpeakingMsgId(null); return }
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const audio = new Audio(url)
      audioRef.current = audio
      audio.onended = () => {
        setAvatarState("idle")
        setSpeakingMsgId(null)
        URL.revokeObjectURL(url)
      }
      audio.onerror = () => { setAvatarState("idle"); setSpeakingMsgId(null) }
      audio.play()
    } catch {
      setAvatarState("idle")
      setSpeakingMsgId(null)
    }
  }, [])

  const stopSpeaking = useCallback(() => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null }
    setAvatarState("idle")
    setSpeakingMsgId(null)
  }, [])

  /* Auto-play when streaming finishes */
  useEffect(() => {
    if (prevStatusRef.current === "streaming" && status === "ready" && autoPlay) {
      const last = messages[messages.length - 1]
      if (last && (last.role as string) === "assistant") {
        const tp = last.parts.find((p) => p.type === "text")
        const text = tp && "text" in tp ? tp.text : ""
        if (text) speakText(text, last.id)
      }
    }
    prevStatusRef.current = status
  }, [status, messages, autoPlay, speakText])

  /* ── STT ── */
  const startListening = useCallback(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SR) {
      alert("Voice input requires Chrome or Edge")
      return
    }
    const recognition = new SR()
    recognition.lang = "en-US"
    recognition.continuous = false
    recognition.interimResults = false

    setIsListening(true)
    setAvatarState("listening")

    recognition.onresult = (e: any) => {
      setInputValue(e.results[0][0].transcript)
      setIsListening(false)
      setAvatarState("idle")
    }
    recognition.onerror = () => { setIsListening(false); setAvatarState("idle") }
    recognition.onend = () => { setIsListening(false); setAvatarState((s) => s === "listening" ? "idle" : s) }
    recognition.start()
  }, [])

  /* ── Send ── */
  const handleSend = (text?: string) => {
    const content = text ?? inputValue.trim()
    if (!content || isLoading) return
    setInputValue("")
    sendMessage({ text: content })
  }

  const handleFormSubmit = (e: React.FormEvent) => { e.preventDefault(); handleSend() }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8eaed] bg-white google-shadow-md">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e8eaed] bg-[#f8f9fa] px-5 py-3">
        <div className="flex items-center gap-3">
          <AiAvatar state={avatarState} />
          <div>
            <p className="text-sm font-semibold text-[#202124]">Ask Sarthak</p>
            <p className="text-xs text-[#5f6368]">RAG-powered · Groq LLaMA 3.3</p>
          </div>
          {/* Online indicator */}
          <span className="flex items-center gap-1 rounded-full bg-[#34A853]/10 px-2 py-0.5 text-xs font-medium text-[#34A853]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#34A853] animate-pulse" />
            online
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Auto-play toggle */}
          <button
            onClick={() => setAutoPlay((v) => !v)}
            title={autoPlay ? "Auto-play ON: click to disable" : "Auto-play OFF: click to enable voice"}
            className={`flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
              autoPlay
                ? "bg-[#4285F4]/10 text-[#4285F4] border border-[#4285F4]/30"
                : "bg-[#f1f3f4] text-[#5f6368] border border-[#e8eaed] hover:text-[#4285F4]"
            }`}
          >
            {autoPlay ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
            <span className="hidden sm:inline">{autoPlay ? "Voice on" : "Voice"}</span>
          </button>

          {/* Resume download */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 rounded-lg border border-[#e8eaed] bg-white px-3 py-1.5 text-xs font-medium text-[#5f6368] transition-colors hover:border-[#4285F4]/40 hover:text-[#4285F4]"
          >
            <Download className="h-3 w-3" />
            Resume
          </a>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-5 py-5 [scrollbar-width:thin] [scrollbar-color:#dadce0_transparent]">
        <div className="flex flex-col gap-5">
          {messages.map((msg) => {
            const textPart = msg.parts.find((p) => p.type === "text")
            const text = textPart && "text" in textPart ? textPart.text : ""
            if (!text) return null
            const isUser = (msg.role as string) === "user"
            const isSpeaking = speakingMsgId === msg.id

            return (
              <div key={msg.id} className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
                {/* Avatar */}
                {isUser ? (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1f3f4] border border-[#e8eaed]">
                    <User className="h-4 w-4 text-[#5f6368]" />
                  </div>
                ) : (
                  <div className="shrink-0">
                    <AiAvatar state={isSpeaking ? "speaking" : "idle"} />
                  </div>
                )}

                {/* Bubble + TTS button */}
                <div className={`group flex max-w-[80%] flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}>
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      isUser
                        ? "bg-[#4285F4] text-white"
                        : "bg-[#f1f3f4] text-[#202124] border border-[#e8eaed]"
                    }`}
                  >
                    {text}
                  </div>

                  {/* TTS play/stop button (assistant messages only) */}
                  {!isUser && (
                    <button
                      onClick={() => isSpeaking ? stopSpeaking() : speakText(text, msg.id)}
                      className="flex items-center gap-1 rounded-full px-2 py-0.5 text-xs text-[#80868b] transition-colors hover:text-[#4285F4] opacity-0 group-hover:opacity-100"
                      title={isSpeaking ? "Stop" : "Play in Sarthak's voice"}
                    >
                      {isSpeaking
                        ? <><VolumeX className="h-3 w-3" /> Stop</>
                        : <><Volume2 className="h-3 w-3" /> Play</>
                      }
                    </button>
                  )}
                </div>
              </div>
            )
          })}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex gap-3">
              <AiAvatar state="idle" />
              <div className="flex items-center gap-2 rounded-2xl border border-[#e8eaed] bg-[#f1f3f4] px-4 py-3 text-sm text-[#5f6368]">
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                Thinking…
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Input area */}
      <div className="border-t border-[#e8eaed] bg-[#f8f9fa] px-5 py-4">
        {/* Quick actions */}
        <div className="mb-3 flex flex-wrap gap-2">
          <div className="mb-1 flex w-full items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-[#4285F4]" />
            <span className="text-xs font-medium text-[#80868b]">Quick actions</span>
          </div>
          {QUICK_ACTIONS.map((action) => (
            <Badge
              key={action}
              variant="outline"
              className="cursor-pointer rounded-full border-[#dadce0] bg-white px-3 py-1 text-xs text-[#3c4043] transition-colors hover:border-[#4285F4]/50 hover:bg-[#4285F4]/5 hover:text-[#4285F4]"
              onClick={() => !isLoading && handleSend(action)}
            >
              {action}
            </Badge>
          ))}
        </div>

        {/* Input form */}
        <form onSubmit={handleFormSubmit} className="flex gap-2">
          <Input
            placeholder="Ask anything about Sarthak…"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
            className="flex-1 rounded-full border-[#dadce0] bg-white text-[#202124] placeholder:text-[#80868b] focus-visible:ring-[#4285F4]"
          />

          {/* Mic button */}
          <Button
            type="button"
            size="icon"
            variant="outline"
            onClick={startListening}
            disabled={isLoading || isListening}
            title="Voice input (Chrome/Edge)"
            className={`h-10 w-10 shrink-0 rounded-full border-[#dadce0] transition-colors ${
              isListening ? "border-[#34A853] bg-[#34A853]/10 text-[#34A853]" : "text-[#5f6368] hover:text-[#4285F4] hover:border-[#4285F4]"
            }`}
          >
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>

          {/* Send button */}
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !inputValue.trim()}
            className="h-10 w-10 shrink-0 rounded-full bg-[#4285F4] hover:bg-[#3367d6] disabled:opacity-40"
            aria-label="Send message"
          >
            <Send className="h-4 w-4 text-white" />
          </Button>
        </form>
      </div>
    </div>
  )
}

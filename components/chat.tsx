"use client"

import { useChat } from "@ai-sdk/react"
import { Chat as AiChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useRef, useEffect, useState } from "react"
import {
  Bot,
  User,
  Send,
  MessageCircle,
  Loader2,
  X,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

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
  text: "Hi! I'm Sarthak's AI assistant. Ask me anything about his experience, projects, or skills, or try a quick action below.",
}

interface ChatProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function Chat({ open, onOpenChange }: ChatProps) {
  const [sessionId] = useState(() => crypto.randomUUID())
  const [inputValue, setInputValue] = useState("")
  const endRef = useRef<HTMLDivElement>(null)

  const [chat] = useState(
    () =>
      new AiChat({
        messages: [
          {
            id: "welcome",
            role: "assistant" as const,
            parts: [WELCOME_PART],
          },
        ],
        transport: new DefaultChatTransport({
          api: "/api/chat",
          body: { sessionId },
        }),
      })
  )

  const { messages, sendMessage, status } = useChat({ chat })

  const isLoading = status === "submitted" || status === "streaming"

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = (text?: string) => {
    const content = text ?? inputValue.trim()
    if (!content || isLoading) return
    setInputValue("")
    sendMessage({ text: content })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSend()
  }

  return (
    <>
      {/* Floating button: mobile only (chat is inline on desktop) */}
      {!open && (
        <div className="md:hidden">
          <Button
            onClick={() => onOpenChange(true)}
            className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-blue-600 shadow-lg shadow-blue-500/30 hover:bg-blue-500 pulse-ring"
            size="icon"
            aria-label="Open chat with Sarthak's AI"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        </div>
      )}

      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="right"
          className="flex w-full flex-col gap-0 border-white/5 bg-zinc-950 p-0 sm:max-w-md"
        >
          {/* Header */}
          <SheetHeader className="border-b border-white/5 px-5 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
                  <Bot className="h-4 w-4 text-white" />
                  <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                </div>
                <div>
                  <SheetTitle className="text-sm text-white">
                    Ask Sarthak
                  </SheetTitle>
                  <SheetDescription className="text-xs text-zinc-500">
                    Powered by Groq · Don't share sensitive info
                  </SheetDescription>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-zinc-500 hover:text-white"
                onClick={() => onOpenChange(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </SheetHeader>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              {messages.map((msg) => {
                const textPart = msg.parts.find((p) => p.type === "text")
                const text =
                  textPart && "text" in textPart ? textPart.text : ""
                if (!text) return null

                return (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${
                      (msg.role as string) === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                        msg.role === "assistant" ? "bg-blue-600" : "bg-zinc-700"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        <Bot className="h-3.5 w-3.5 text-white" />
                      ) : (
                        <User className="h-3.5 w-3.5 text-zinc-300" />
                      )}
                    </div>

                    {/* Bubble */}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.role === "assistant"
                          ? "bg-zinc-800 text-zinc-200"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {text}
                    </div>
                  </div>
                )
              })}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600">
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl bg-zinc-800 px-4 py-2.5 text-sm text-zinc-500">
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    Thinking…
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>
          </div>

          {/* Input area */}
          <div className="border-t border-white/5 px-4 py-3">
            {/* Quick actions */}
            <div className="mb-3 flex flex-wrap gap-1.5">
              <div className="mb-1 flex w-full items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-blue-400" />
                <span className="text-xs text-zinc-600">Quick actions</span>
              </div>
              {QUICK_ACTIONS.map((action) => (
                <Badge
                  key={action}
                  variant="outline"
                  className="cursor-pointer rounded-full border-white/10 bg-zinc-800/60 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-blue-500/30 hover:bg-zinc-700 hover:text-blue-400"
                  onClick={() => !isLoading && handleSend(action)}
                >
                  {action}
                </Badge>
              ))}
            </div>

            {/* Input form */}
            <form onSubmit={handleFormSubmit} className="flex gap-2">
              <Input
                placeholder="Ask about Sarthak…"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
                className="flex-1 rounded-full border-white/10 bg-zinc-800/60 text-white placeholder:text-zinc-600 focus-visible:ring-blue-500"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !inputValue.trim()}
                className="h-10 w-10 shrink-0 rounded-full bg-blue-600 hover:bg-blue-500"
                aria-label="Send message"
              >
                <Send className="h-4 w-4 text-white" />
              </Button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

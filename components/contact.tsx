"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Calendar, Send, Loader2 } from "lucide-react"
import { toast } from "sonner"

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.error || "Something went wrong. Please try again.")
        return
      }

      toast.success("Message sent! Sarthak will be in touch shortly.")
      setForm({ name: "", company: "", email: "", message: "" })
    } catch {
      toast.error("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/sarthak-chandarana"

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm font-medium text-[#4285F4]">
            05 / Contact
          </p>
          <h2 className="text-3xl font-black text-[#202124] sm:text-4xl">
            Let's build something great.
          </h2>
          <p className="mt-4 max-w-lg text-base text-[#5f6368]">
            I'm actively looking for full-time AI/ML engineering roles starting
            May 2026 (earlier for the right opportunity). Reach out to talk
            about how I can help your team.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact form */}
          <div className="rounded-2xl border border-[#e8eaed] bg-white p-6">
            <h3 className="mb-6 font-semibold text-[#202124]">Drop a message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#80868b]">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="border-[#e8eaed] bg-white text-[#202124] placeholder:text-[#80868b] focus-visible:ring-[#4285F4]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#80868b]">Company</label>
                  <Input
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    className="border-[#e8eaed] bg-white text-[#202124] placeholder:text-[#80868b] focus-visible:ring-[#4285F4]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#80868b]">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="jane@acme.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="border-[#e8eaed] bg-white text-[#202124] placeholder:text-[#80868b] focus-visible:ring-[#4285F4]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#80868b]">Message</label>
                <Textarea
                  placeholder="Tell me about the role or opportunity…"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={4}
                  className="resize-none border-[#e8eaed] bg-white text-[#202124] placeholder:text-[#80868b] focus-visible:ring-[#4285F4]"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="gap-2 bg-[#4285F4] text-white hover:bg-[#3367d6]"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Links & Calendly */}
          <div className="flex flex-col gap-6">
            {/* Schedule */}
            <div className="rounded-2xl border border-[#4285F4]/20 bg-[#4285F4]/5 p-6">
              <h3 className="mb-2 font-semibold text-[#202124]">
                Prefer a quick call?
              </h3>
              <p className="mb-4 text-sm text-[#5f6368]">
                Book a 20-minute intro call directly on my calendar, no back
                and forth needed.
              </p>
              <Button
                className="gap-2 bg-[#4285F4] text-white hover:bg-[#3367d6]"
                asChild
              >
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-4 w-4" />
                  Schedule a Call
                </a>
              </Button>
            </div>

            {/* Direct contact */}
            <div className="rounded-2xl border border-[#e8eaed] bg-white p-6">
              <h3 className="mb-4 font-semibold text-[#202124]">Find me at</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:src16@illinois.edu"
                  className="flex items-center gap-3 rounded-xl border border-[#e8eaed] bg-[#f8f9fa] p-3 text-sm text-[#5f6368] transition-colors hover:border-[#4285F4]/30 hover:text-[#4285F4]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#4285F4]" />
                  src16@illinois.edu
                </a>
                <a
                  href="https://www.linkedin.com/in/sarthakchandarana123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-[#e8eaed] bg-[#f8f9fa] p-3 text-sm text-[#5f6368] transition-colors hover:border-[#4285F4]/30 hover:text-[#4285F4]"
                >
                  <Linkedin className="h-4 w-4 shrink-0 text-[#4285F4]" />
                  linkedin.com/in/sarthakchandarana123
                </a>
                <a
                  href="https://github.com/sarthakc123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-[#e8eaed] bg-[#f8f9fa] p-3 text-sm text-[#5f6368] transition-colors hover:border-[#4285F4]/30 hover:text-[#4285F4]"
                >
                  <Github className="h-4 w-4 shrink-0 text-[#4285F4]" />
                  github.com/sarthakc123
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

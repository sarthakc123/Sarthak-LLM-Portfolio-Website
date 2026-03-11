"use client"

import { ParticleCanvas } from "@/components/particle-canvas"
import { ChatInline } from "@/components/chat-inline"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, MapPin, GraduationCap, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const METRICS = [
  { value: "$80K/wk", label: "Lab cost savings", color: "#34A853" },
  { value: "4,500 hrs", label: "Saved/week in prod", color: "#4285F4" },
  { value: "$100M", label: "Gov't annual savings", color: "#EA4335" },
  { value: "3.92 GPA", label: "UIUC MSIM", color: "#FBBC05" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      {/* Subtle particle layer */}
      <ParticleCanvas />

      {/* Two-column layout */}
      <div className="relative z-10 flex min-h-[calc(100vh-64px)] flex-col lg:flex-row lg:items-start">

        {/* ── LEFT SIDEBAR ── */}
        <div className="lg:w-[300px] lg:shrink-0 lg:self-start lg:sticky lg:top-16 lg:max-h-[calc(100vh-64px)] lg:overflow-y-auto flex flex-col border-b border-[#e8eaed] bg-[#f8f9fa] lg:border-b-0 lg:border-r lg:z-0">

          {/* Google-colored accent bar at top */}
          <div className="h-1 w-full flex-none">
            <div className="h-full w-full bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#FBBC05]" />
          </div>

          {/* ── Mobile layout (horizontal) ── */}
          <div className="flex items-center gap-4 px-5 py-5 lg:hidden">
            <div className="relative shrink-0">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-[#4285F4] to-[#34A853]" />
              <div className="relative h-14 w-14 overflow-hidden rounded-full">
                <Image
                  src="/images/headshot.jpg"
                  alt="Sarthak Chandarana"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight text-[#202124] leading-tight">
                Sarthak <span className="gradient-text">Chandarana</span>
              </h1>
              <p className="text-xs text-[#5f6368]">Software & AI Engineer</p>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-[#80868b]">
                <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-[#4285F4]" />Champaign, IL</span>
                <span className="flex items-center gap-1"><GraduationCap className="h-3 w-3 text-[#4285F4]" />UIUC MSIM · 3.92</span>
              </div>
            </div>
          </div>

          {/* ── Desktop layout (vertical) ── */}
          <div className="max-lg:hidden flex flex-1 flex-col items-center gap-6 px-8 py-10">

            {/* Photo with glow ring */}
            <div className="relative mt-4">
              {/* Animated outer glow */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#4285F4]/20 via-[#34A853]/20 to-[#FBBC05]/20 blur-lg animate-pulse" />
              {/* Color ring */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-[#4285F4] via-[#34A853] to-[#FBBC05]" />
              {/* Photo */}
              <div className="relative h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src="/images/headshot.jpg"
                  alt="Sarthak Chandarana"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Name + tagline */}
            <div className="text-center">
              <h1 className="text-2xl font-black tracking-tight text-[#202124]">
                Sarthak{" "}
                <span className="gradient-text">Chandarana</span>
              </h1>
              <p className="mt-1 text-sm font-medium text-[#5f6368]">
                Software & AI Engineer
              </p>
              <p className="mt-2 text-xs italic text-[#80868b] leading-relaxed">
                "I translate AI into visible impact."
              </p>
            </div>

            {/* Location + education */}
            <div className="flex w-full flex-col gap-2 text-sm text-[#5f6368]">
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[#4285F4]" />
                Champaign, IL
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="h-3.5 w-3.5 shrink-0 text-[#4285F4]" />
                UIUC MSIM · 3.92 GPA
              </span>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-[#e8eaed]" />

            {/* Impact metrics */}
            <div className="w-full space-y-2">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#80868b]">
                Real-world impact
              </p>
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="group flex items-center gap-3 rounded-xl border border-[#e8eaed] bg-white px-4 py-2.5 transition-shadow hover:shadow-md"
                  style={{ borderLeftColor: m.color, borderLeftWidth: "3px" }}
                >
                  <span className="font-mono text-sm font-bold" style={{ color: m.color }}>
                    {m.value}
                  </span>
                  <span className="text-xs text-[#5f6368]">{m.label}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/sarthakc123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8eaed] bg-white text-[#5f6368] transition-colors hover:border-[#4285F4]/40 hover:text-[#4285F4]"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/sarthak-chandarana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8eaed] bg-white text-[#5f6368] transition-colors hover:border-[#4285F4]/40 hover:text-[#4285F4]"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:sarthakc@illinois.edu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8eaed] bg-white text-[#5f6368] transition-colors hover:border-[#EA4335]/40 hover:text-[#EA4335]"
                title="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            {/* Availability badge */}
            <Badge
              variant="outline"
              className="inline-flex gap-1.5 border-[#34A853]/30 bg-[#34A853]/8 text-[#34A853] font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34A853]" />
              </span>
              Open to roles · May 2026
            </Badge>
          </div>
        </div>

        {/* ── RIGHT: CHAT ── */}
        <div className="flex flex-1 min-w-0 flex-col gap-4 p-5 lg:p-8 bg-white relative z-0">

          {/* Mini heading above chat */}
          <div className="hidden lg:block">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#80868b]">
              Meet Sarthak, powered by AI
            </p>
            <p className="mt-0.5 text-sm text-[#5f6368]">
              Ask anything about his career, or try a quick action below.
            </p>
          </div>

          <div className="flex-1 min-h-[520px]">
            <ChatInline />
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center pb-1">
            <a
              href="#about"
              className="flex flex-col items-center gap-1 text-xs text-[#80868b] transition-colors hover:text-[#5f6368]"
            >
              <span>Scroll to explore the full portfolio</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

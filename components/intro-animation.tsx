"use client"

import { useEffect, useState, useCallback } from "react"

const TAGLINE = "I translate AI into visible impact."

const MILESTONES = [
  { year: "2021–24", label: "Quantiphi", detail: "4,500 hrs/wk saved", color: "#4285F4" },
  { year: "2024–26", label: "UIUC MSIM", detail: "3.92 GPA · AI Research", color: "#34A853" },
  { year: "2025+", label: "Molecule Maker Lab", detail: "$80K/wk lab savings", color: "#FBBC05" },
]

const WAVE_HEIGHTS = [3, 6, 10, 14, 10, 6, 3, 6, 10, 6, 3]

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [exiting, setExiting] = useState(false)

  const exit = useCallback(() => {
    sessionStorage.setItem("intro_seen", "1")
    setExiting(true)
    setTimeout(onComplete, 850)
  }, [onComplete])

  /* Skip intro if already seen this session */
  useEffect(() => {
    if (sessionStorage.getItem("intro_seen")) {
      onComplete()
    }
  }, [onComplete])

  /* Phase progression */
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 3400),
      setTimeout(() => setPhase(5), 5000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  /* Auto-exit after 8s */
  useEffect(() => {
    if (phase === 5) {
      const t = setTimeout(exit, 3000)
      return () => clearTimeout(t)
    }
  }, [phase, exit])

  /* Typewriter */
  useEffect(() => {
    if (phase < 3) return
    let i = 0
    const interval = setInterval(() => {
      setTypedText(TAGLINE.slice(0, i + 1))
      i++
      if (i >= TAGLINE.length) clearInterval(interval)
    }, 48)
    return () => clearInterval(interval)
  }, [phase])

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "#0a0d14",
        transition: "transform 0.85s cubic-bezier(0.7, 0, 0.3, 1)",
        transform: exiting ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      {/* Ambient gradient blobs */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(66,133,244,0.18) 0%, transparent 70%)",
          top: "-150px",
          left: "-100px",
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(52,168,83,0.14) 0%, transparent 70%)",
          bottom: "-100px",
          right: "-80px",
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(251,188,5,0.10) 0%, transparent 70%)",
          bottom: "20%",
          left: "10%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-7 px-6 text-center" style={{ maxWidth: 520 }}>

        {/* Large Avatar */}
        <div
          style={{
            transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.34,1.56,0.64,1)",
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "scale(1)" : "scale(0.4)",
          }}
        >
          <LargeAvatar speaking={phase >= 3 && phase < 5} />
        </div>

        {/* Name + title */}
        <div
          style={{
            transition: "opacity 0.6s ease, transform 0.6s ease",
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            Sarthak{" "}
            <span style={{
              background: "linear-gradient(135deg, #4285F4, #34A853)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Chandarana
            </span>
          </h1>
          <p style={{ marginTop: 6, fontSize: 13, color: "#6b7280", fontWeight: 500 }}>
            Software & AI Engineer
          </p>
        </div>

        {/* Typewriter tagline */}
        <div
          style={{
            minHeight: "1.6rem",
            transition: "opacity 0.4s ease",
            opacity: phase >= 3 ? 1 : 0,
          }}
        >
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontStyle: "italic", fontWeight: 500 }}>
            "{typedText}
            <span
              style={{
                display: "inline-block",
                width: 2,
                height: "1em",
                background: "#4285F4",
                marginLeft: 2,
                verticalAlign: "text-bottom",
                animation: typedText.length < TAGLINE.length ? "none" : "blink 1s step-end infinite",
              }}
            />
            "
          </p>
        </div>

        {/* Milestone cards */}
        <div className="flex flex-wrap justify-center gap-3 w-full">
          {MILESTONES.map((m, i) => (
            <div
              key={m.year}
              style={{
                transition: `opacity 0.5s ease ${i * 120}ms, transform 0.5s ease ${i * 120}ms`,
                opacity: phase >= 4 ? 1 : 0,
                transform: phase >= 4 ? "translateY(0)" : "translateY(20px)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: "10px 16px",
                backdropFilter: "blur(8px)",
                minWidth: 130,
                flex: "1 1 130px",
                maxWidth: 160,
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: m.color, marginBottom: 2 }}>{m.year}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>{m.label}</div>
              <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 2 }}>{m.detail}</div>
            </div>
          ))}
        </div>

        {/* Enter button */}
        <button
          onClick={exit}
          style={{
            transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
            opacity: phase >= 5 ? 1 : 0,
            transform: phase >= 5 ? "scale(1)" : "scale(0.85)",
            background: "linear-gradient(135deg, #4285F4, #34A853)",
            border: "none",
            borderRadius: 999,
            padding: "12px 32px",
            fontSize: 14,
            fontWeight: 700,
            color: "#fff",
            cursor: "pointer",
            boxShadow: "0 0 24px rgba(66,133,244,0.4)",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 40px rgba(66,133,244,0.6)"
            ;(e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 24px rgba(66,133,244,0.4)"
            ;(e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"
          }}
        >
          Explore the journey →
        </button>
      </div>

      {/* Skip */}
      <button
        onClick={exit}
        style={{
          position: "absolute",
          bottom: 24,
          right: 28,
          fontSize: 12,
          color: "#4b5563",
          background: "none",
          border: "none",
          cursor: "pointer",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#9ca3af")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#4b5563")}
      >
        skip →
      </button>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes wave {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

/* Large AI avatar (80px) — same design as AiAvatar but bigger */
function LargeAvatar({ speaking }: { speaking: boolean }) {
  return (
    <div style={{ position: "relative", width: 80, height: 80 }}>
      {/* Outer spinning gradient ring */}
      <div
        style={{
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          background: "conic-gradient(from 0deg, #4285F4, #34A853, #FBBC05, #EA4335, #4285F4)",
          animation: "slow-spin 4s linear infinite",
          opacity: 0.8,
        }}
      />
      {/* White gap ring */}
      <div
        style={{
          position: "absolute",
          inset: -1,
          borderRadius: "50%",
          background: "#0a0d14",
        }}
      />
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "#4285F4",
          filter: "blur(16px)",
          opacity: 0.3,
        }}
      />
      {/* Circle */}
      <div
        style={{
          position: "relative",
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #4285F4, #34A853)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(66,133,244,0.4)",
        }}
      >
        {/* Eyes */}
        <div style={{ position: "absolute", top: 24, display: "flex", gap: 12 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff" }} />
        </div>

        {/* Mouth */}
        {speaking ? (
          <div style={{ position: "absolute", bottom: 18, display: "flex", alignItems: "flex-end", gap: 3 }}>
            {[4, 8, 14, 20, 14, 8, 4, 8, 14, 8, 4].map((h, i) => (
              <div
                key={i}
                style={{
                  width: 3,
                  borderRadius: 2,
                  background: "#fff",
                  height: h,
                  animation: "wave 0.6s ease-in-out infinite",
                  animationDelay: `${i * 55}ms`,
                }}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              position: "absolute",
              bottom: 18,
              width: 24,
              height: 12,
              borderRadius: "0 0 12px 12px",
              border: "2.5px solid rgba(255,255,255,0.8)",
              borderTop: "none",
            }}
          />
        )}
      </div>
    </div>
  )
}

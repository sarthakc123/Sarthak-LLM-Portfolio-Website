"use client"

export type AvatarState = "idle" | "listening" | "speaking"

const WAVE_HEIGHTS = [3, 6, 9, 6, 3, 6, 9]

export function AiAvatar({ state = "idle" }: { state?: AvatarState }) {
  return (
    <div className="relative h-11 w-11 shrink-0">
      {/* Outer pulse ring */}
      {state !== "idle" && (
        <div
          className={`absolute inset-0 rounded-full animate-ping ${
            state === "speaking"
              ? "bg-[#4285F4]/20"
              : "bg-[#34A853]/20"
          }`}
        />
      )}

      {/* Soft glow */}
      <div
        className={`absolute inset-0 rounded-full blur-md transition-opacity duration-500 ${
          state === "idle" ? "opacity-20 bg-[#4285F4]" :
          state === "listening" ? "opacity-40 bg-[#34A853]" :
          "opacity-40 bg-[#4285F4]"
        }`}
      />

      {/* Avatar circle */}
      <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#4285F4] to-[#34A853] shadow-md">
        {/* Eyes */}
        <div className="absolute flex gap-[7px]" style={{ top: "13px" }}>
          <div
            className={`h-[5px] w-[5px] rounded-full bg-white transition-all ${
              state === "listening" ? "animate-pulse scale-125" : ""
            }`}
          />
          <div
            className={`h-[5px] w-[5px] rounded-full bg-white transition-all ${
              state === "listening" ? "animate-pulse scale-125" : ""
            }`}
          />
        </div>

        {/* Mouth */}
        {state === "speaking" ? (
          /* Waveform bars */
          <div className="absolute flex items-end gap-[2px]" style={{ bottom: "10px" }}>
            {WAVE_HEIGHTS.map((h, i) => (
              <div
                key={i}
                className="w-[2.5px] rounded-full bg-white animate-bounce"
                style={{
                  height: `${h}px`,
                  animationDelay: `${i * 70}ms`,
                  animationDuration: "500ms",
                }}
              />
            ))}
          </div>
        ) : state === "listening" ? (
          /* Listening arc */
          <div
            className="absolute rounded-full border-2 border-white/80 animate-pulse"
            style={{ bottom: "9px", width: "14px", height: "7px", borderTop: "none" }}
          />
        ) : (
          /* Idle smile */
          <div
            className="absolute rounded-full border-2 border-white/70"
            style={{ bottom: "10px", width: "14px", height: "7px", borderTop: "none" }}
          />
        )}
      </div>
    </div>
  )
}

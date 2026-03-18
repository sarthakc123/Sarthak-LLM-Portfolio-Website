"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Chat } from "@/components/chat"
import { IntroAnimation } from "@/components/intro-animation"

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false)
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      {!introComplete && (
        <IntroAnimation onComplete={() => setIntroComplete(true)} />
      )}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      {/* Mobile-only slide-out chat (desktop uses inline chat in Hero) */}
      <Chat open={chatOpen} onOpenChange={setChatOpen} />
    </>
  )
}

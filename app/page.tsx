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

export default function Home() {
  // Mobile-only floating chat state
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
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

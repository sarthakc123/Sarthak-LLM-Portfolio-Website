import type { Metadata } from "next"
import { Montserrat, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sarthak Chandarana | AI Engineer",
  description:
    "AI Engineer with 3+ years building production-grade LLM systems, RAG pipelines, and agentic AI. UIUC MSIM '26. Open to full-time roles starting May 2026.",
  keywords: [
    "AI Engineer",
    "LLM",
    "RAG",
    "Machine Learning",
    "Sarthak Chandarana",
    "UIUC",
    "LangChain",
    "Groq",
  ],
  openGraph: {
    title: "Sarthak Chandarana | AI Engineer",
    description:
      "AI Engineer with 3+ years building production-grade LLM systems, RAG pipelines, and agentic AI.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

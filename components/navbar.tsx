"use client"

import { useState, useEffect } from "react"
import { Radio } from "lucide-react"
import { useWaitlist } from "@/components/waitlist-context"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { openWaitlist } = useWaitlist()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0900]/96 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Radio className="h-4 w-4" style={{ color: "var(--amber)" }} />
          <span className="text-sm font-bold uppercase tracking-widest text-foreground">
            ClearBand&nbsp;<span style={{ color: "var(--amber)" }}>AI</span>
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            ["Workflow", "#workflow"],
            ["Plugins", "#plugins"],
            ["Pricing", "#pricing"],
            ["Specs", "#specs"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-xs text-muted-foreground">15-day free trial</span>
          <button
            type="button"
            onClick={openWaitlist}
            className="rounded px-4 py-2 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--amber)", color: "#0D0900" }}
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  )
}

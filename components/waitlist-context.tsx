"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type WaitlistContextValue = {
  open: boolean
  openWaitlist: () => void
  closeWaitlist: () => void
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null)

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const openWaitlist = useCallback(() => setOpen(true), [])
  const closeWaitlist = useCallback(() => setOpen(false), [])

  return (
    <WaitlistContext.Provider value={{ open, openWaitlist, closeWaitlist }}>
      {children}
    </WaitlistContext.Provider>
  )
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext)
  if (!ctx) throw new Error("useWaitlist must be used within WaitlistProvider")
  return ctx
}

import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ClearBand AI – Hear the Signal, Ignore the QRN",
  description:
    "The first Hybrid Chain audio processor for Amateur Radio. Studio-grade noise reduction, local AI transcription, and surgical DSP—running entirely on your PC. $29 lifetime license.",
  keywords: ["amateur radio", "ham radio", "noise reduction", "DSP", "AI audio", "QRN", "DX", "ClearBand"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

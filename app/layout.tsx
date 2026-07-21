import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://clearbandai.app"),
  title: "ClearBand AI - The Amateur Radio AI Cockpit",
  description:
    "ClearBand is the AI cockpit for Amateur Radio: a local audio engine plus a plugin ecosystem that transcribes, extracts callsigns, and logs contacts automatically. Core DSP, transcripts, and DXCC lookups stay on your PC. $29 lifetime license.",
  keywords: ["amateur radio", "ham radio", "logbook", "ADIF", "callsign", "voice transcription", "DXCC", "noise reduction", "DSP", "AI audio", "DX", "ClearBand"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: "#0D0900",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "ClearBand AI - The Amateur Radio AI Cockpit",
    description:
      "Hear what you've been missing. Understand who is calling. Log it automatically. A local audio engine plus a plugin ecosystem for Amateur Radio. $29 lifetime license.",
    url: "https://clearbandai.app",
    siteName: "ClearBand AI",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ClearBand AI - the Amateur Radio AI Cockpit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearBand AI - The Amateur Radio AI Cockpit",
    description:
      "Hear what you've been missing. Understand who is calling. Log it automatically. A local audio engine plus a plugin ecosystem for Amateur Radio.",
    images: ["/og.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

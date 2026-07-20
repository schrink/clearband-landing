import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://clearbandai.app"),
  title: "ClearBand AI – Hear the Signal, Ignore the QRN",
  description:
    "The first Hybrid Chain audio processor for Amateur Radio. Studio-grade noise reduction, local AI transcription, and surgical DSP—running entirely on your PC. $29 lifetime license.",
  keywords: ["amateur radio", "ham radio", "noise reduction", "DSP", "AI audio", "QRN", "DX", "ClearBand"],
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
    title: "ClearBand AI – Hear the Signal, Ignore the QRN",
    description:
      "Hybrid Chain audio processor for Amateur Radio. Studio-grade noise reduction, local AI transcription, and surgical DSP—100% offline. $29 lifetime license.",
    url: "https://clearbandai.app",
    siteName: "ClearBand AI",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ClearBand AI – Hear the signal, ignore the QRN",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearBand AI – Hear the Signal, Ignore the QRN",
    description:
      "Hybrid Chain audio processor for Amateur Radio. Studio-grade noise reduction, local AI transcription, and surgical DSP—100% offline.",
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

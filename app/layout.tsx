import type React from "react"
import type { Metadata } from "next"
import { Dancing_Script, Pacifico } from "next/font/google"
import "./globals.css"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
})

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export const metadata: Metadata = {
  title: "Happy Birthday My Love 💕",
  description: "A special birthday website for my beautiful girlfriend",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dancingScript.variable} ${pacifico.variable} font-sans`}>{children}</body>
    </html>
  )
}

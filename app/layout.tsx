import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sharksense - AI-Powered Talent Solutions",
  description:
    "Save 60% on hiring costs. Double your productivity. Get AI-enabled experts across domains, ready to plug into your workflow.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/shark favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/shark favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/shark favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}

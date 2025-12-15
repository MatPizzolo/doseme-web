import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import localFont from "next/font/local"

const myFont = localFont({
  src: "./fonts/Swiss721BT.ttf"
})

export const metadata: Metadata = {
  title: "DosEme | Servicios Profesionales de Limpieza para Empresas",
  description:
    "Servicios expertos de limpieza comercial para oficinas, locales comerciales y propiedades comerciales. Personal certificado, productos eco-amigables y horarios flexibles.",
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`antialiased ${myFont.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PristinePro Limpieza Comercial | Servicios Profesionales de Limpieza para Empresas",
  description:
    "Servicios expertos de limpieza comercial para oficinas, locales comerciales y propiedades comerciales. Personal certificado, productos eco-amigables y horarios flexibles.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-swis721 antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

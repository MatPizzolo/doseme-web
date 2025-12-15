import Link from "next/link"
import { Sparkles, Facebook, Linkedin, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

const serviceAreas = [
  "Distrito Céntrico",
  "Parque Empresarial Norte",
  "Zona Industrial",
  "Corredor Comercial",
  "Campus Corporativo Este",
  "Centro Tecnológico",
]

const quickLinks = [
  { label: "Servicios", href: "#services" },
  { label: "Nosotros", href: "#why-us" },
  { label: "Proceso", href: "#process" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Contacto", href: "#contact" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <Image src="/images/logo.png" alt="DosEme" fill className="object-contain" />
              </div>
              <span className="font-semibold text-lg text-foreground text-white">DosEme</span>
            </Link>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <strong className="text-primary-foreground">Teléfono:</strong>
                <br />
                (555) 123-4567
              </li>
              <li>
                <strong className="text-primary-foreground">Correo:</strong>
                <br />
                info@pristinepro.com
              </li>
              <li>
                <strong className="text-primary-foreground">Horario:</strong>
                <br />
                Servicio Disponible 24/7
              </li>
            </ul>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © DosEme 2025
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/60">
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidad
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "María Fernández",
    role: "Gerente de Instalaciones",
    company: "TechFlow Inc.",
    image: "/professional-woman-headshot-business-attire.jpg",
    quote:
      "PristinePro transformó el ambiente de nuestra oficina. La atención al detalle es extraordinaria, y nuestros empleados notaron la diferencia inmediatamente. Altamente recomendado para cualquier empresa.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    role: "Director de Tienda",
    company: "Urban Retail Group",
    image: "/professional-asian-man-headshot-business.jpg",
    quote:
      "Cambiar a PristinePro fue la mejor decisión que tomamos. Trabajan sin interrupciones durante nuestro horario comercial, y nuestro espacio comercial nunca se ha visto mejor. Los comentarios de los clientes han sido sobresalientes.",
    rating: 5,
  },
  {
    name: "Laura Rodríguez",
    role: "Gerente de Propiedades",
    company: "Summit Commercial Properties",
    image: "/professional-woman-blonde-headshot-corporate.jpg",
    quote:
      "Gestionar múltiples propiedades significa que necesito socios confiables. PristinePro entrega calidad consistente en todos nuestros edificios. Su comunicación y flexibilidad son incomparables.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Testimonios</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Confianza de Líderes Empresariales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No tome solo nuestra palabra. Esto es lo que nuestros clientes dicen sobre trabajar con PristinePro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Quote className="w-10 h-10 text-primary/30" />
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

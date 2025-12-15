import Image from "next/image"
import { Award, Users, Leaf, Clock, Shield, ThumbsUp } from "lucide-react"

const trustIndicators = [
  {
    icon: Award,
    stat: "15+",
    label: "Años en el Mercado",
    description: "Trayectoria comprobada de excelencia",
  },
  {
    icon: Users,
    stat: "100%",
    label: "Personal Certificado",
    description: "Profesionales capacitados y con antecedentes verificados",
  },
  {
    icon: Leaf,
    stat: "Verde",
    label: "Productos Eco-Amigables",
    description: "Seguros para su equipo y el medio ambiente",
  },
  {
    icon: Clock,
    stat: "24/7",
    label: "Horarios Flexibles",
    description: "Servicio cuando mejor le convenga",
  },
  {
    icon: Shield,
    stat: "$5M",
    label: "Asegurados y Garantizados",
    description: "Cobertura de responsabilidad completa para su tranquilidad",
  },
  {
    icon: ThumbsUp,
    stat: "98%",
    label: "Satisfacción del Cliente",
    description: "Superando expectativas consistentemente",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/professional-cleaning-staff-in-uniform-smiling-in-.jpg"
                alt="Nuestro equipo profesional de limpieza"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-background hidden md:block">
              <Image
                src="/eco-friendly-green-cleaning-products-and-supplies-.jpg"
                alt="Productos de limpieza eco-amigables"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Por Qué Elegirnos</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                El Nombre de Confianza en Limpieza Comercial
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Combinamos experiencia en la industria con tecnología de limpieza de vanguardia para entregar resultados
                excepcionales. Nuestro compromiso con la calidad, confiabilidad y sustentabilidad nos distingue.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {trustIndicators.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-foreground">{item.stat}</span>
                    </div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

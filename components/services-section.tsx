"use client"

import { Building2, Store, HardHat, Sparkles, Wind, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Building2,
    title: "Limpieza de Oficinas",
    description:
      "Programación de limpieza diaria, semanal o personalizada para oficinas corporativas de todos los tamaños. Incluye estaciones de trabajo, áreas comunes y sanitarios.",
    features: [
      "Sanitización de Escritorios y Superficies",
      "Cuidado de Alfombras y Pisos",
      "Cocina y Salas de Descanso",
    ],
  },
  {
    icon: Store,
    title: "Limpieza de Locales Comerciales",
    description:
      "Mantenga su espacio comercial atractivo e impecable para sus clientes. Trabajamos según su horario comercial para minimizar interrupciones.",
    features: ["Escaparates", "Limpieza de Exhibidores", "Mantenimiento de Probadores"],
  },
  {
    icon: HardHat,
    title: "Limpieza Post-Construcción",
    description:
      "Limpieza integral después de proyectos de construcción o renovación. Manejamos la remoción de escombros y limpieza detallada de superficies.",
    features: ["Remoción de Escombros", "Eliminación de Polvo", "Pulido Final y Detalle"],
  },
  {
    icon: Sparkles,
    title: "Cuidado y Mantenimiento de Pisos",
    description:
      "Cuidado profesional de pisos incluyendo decapado, encerado, pulido y limpieza profunda para todo tipo de pisos.",
    features: ["Limpieza de Baldosas y Juntas", "Restauración de Pisos de Madera", "Limpieza Profunda de Alfombras"],
  },
  {
    icon: Wind,
    title: "Limpieza de Ventanas",
    description:
      "Ventanas cristalinas por dentro y por fuera. Atendemos edificios de todas las alturas con equipamiento certificado de seguridad.",
    features: ["Interior y Exterior", "Capacidad para Grandes Alturas", "Limpieza de Marcos y Alféizares"],
  },
  {
    icon: ShieldCheck,
    title: "Sanitización Especializada",
    description:
      "Servicios de desinfección de grado hospitalario para áreas de alto contacto y entornos sensibles que requieren limpieza mejorada.",
    features: ["Productos Aprobados por EPA", "Enfoque en Puntos de Contacto", "Tratamiento de Calidad del Aire"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Qué Hacemos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Servicios Integrales de Limpieza Comercial
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde mantenimiento diario de oficinas hasta limpieza profunda especializada, entregamos soluciones
            personalizadas para cada espacio comercial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

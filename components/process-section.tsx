import { FileText, ClipboardList, CalendarCheck, BadgeCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Solicitar Cotización",
    description: "Complete nuestro formulario simple o llámenos. Cuéntenos sobre su espacio y necesidades de limpieza.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Plan Personalizado",
    description:
      "Visitaremos sus instalaciones, evaluaremos los requerimientos y crearemos un plan de limpieza personalizado con precios transparentes.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Servicio Programado",
    description:
      "Elija un horario que funcione para su negocio. Llegamos puntualmente, siempre, con cero interrupciones.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Garantía de Calidad",
    description:
      "Inspecciones regulares y ciclos de retroalimentación aseguran resultados excepcionales consistentemente en los que puede confiar.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider mb-3">
            Nuestro Proceso
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Pasos Simples hacia un Espacio Más Limpio
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Comenzar es fácil. Nos encargamos de todo para que usted pueda enfocarse en lo más importante: su negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-primary-foreground/20 -translate-x-1/2" />
              )}
              <div className="text-center space-y-4">
                <div className="relative inline-flex">
                  <div className="w-24 h-24 rounded-full border-2 border-primary-foreground/20 flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground">{step.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

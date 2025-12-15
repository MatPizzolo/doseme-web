"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react"

const facilityTypes = [
  "Oficina Corporativa",
  "Local Comercial",
  "Centro Médico",
  "Institución Educativa",
  "Industrial/Depósito",
  "Restaurante/Hotelería",
  "Edificio Multi-Inquilino",
  "Otro",
]

const servicesNeeded = [
  "Limpieza Diaria",
  "Limpieza Semanal",
  "Limpieza Profunda",
  "Cuidado de Pisos",
  "Limpieza de Ventanas",
  "Post-Construcción",
  "Sanitización",
  "Paquete Personalizado",
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    facilityType: "",
    squareFootage: "",
    services: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.companyName.trim()) {
      newErrors.companyName = "El nombre de la empresa es requerido"
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = "El nombre de contacto es requerido"
    }
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Por favor ingrese un correo electrónico válido"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "El número de teléfono es requerido"
    }
    if (!formData.facilityType) {
      newErrors.facilityType = "Por favor seleccione un tipo de instalación"
    }
    if (!formData.services) {
      newErrors.services = "Por favor seleccione los servicios necesarios"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitted(true)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">¡Gracias!</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Hemos recibido su solicitud y nos comunicaremos dentro de las 24 horas con una cotización personalizada para
            sus instalaciones.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Enviar Otra Solicitud</Button>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Contáctenos</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                ¿Listo para un Espacio Más Limpio?
              </h2>
              <p className="text-lg text-muted-foreground">
                Complete el formulario y le proporcionaremos una cotización gratuita y sin compromiso, adaptada a sus
                necesidades específicas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Llámenos</p>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Envíenos un Correo</p>
                  <p className="text-muted-foreground">info@pristinepro.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Área de Servicio</p>
                  <p className="text-muted-foreground">Área Metropolitana y Condados Circundantes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Solicite una Cotización Gratuita</CardTitle>
                <CardDescription>
                  Cuéntenos sobre sus instalaciones y crearemos un plan de limpieza personalizado.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Nombre de la Empresa *</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleChange("companyName", e.target.value)}
                        className={errors.companyName ? "border-destructive" : ""}
                      />
                      {errors.companyName && <p className="text-sm text-destructive">{errors.companyName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactName">Nombre de Contacto *</Label>
                      <Input
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => handleChange("contactName", e.target.value)}
                        className={errors.contactName ? "border-destructive" : ""}
                      />
                      {errors.contactName && <p className="text-sm text-destructive">{errors.contactName}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Número de Teléfono *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Tipo de Instalación *</Label>
                      <Select
                        value={formData.facilityType}
                        onValueChange={(value) => handleChange("facilityType", value)}
                      >
                        <SelectTrigger className={errors.facilityType ? "border-destructive" : ""}>
                          <SelectValue placeholder="Seleccione tipo de instalación" />
                        </SelectTrigger>
                        <SelectContent>
                          {facilityTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.facilityType && <p className="text-sm text-destructive">{errors.facilityType}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="squareFootage">Metros Cuadrados (Aprox.)</Label>
                      <Input
                        id="squareFootage"
                        placeholder="ej., 500 m²"
                        value={formData.squareFootage}
                        onChange={(e) => handleChange("squareFootage", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Servicios Necesarios *</Label>
                    <Select value={formData.services} onValueChange={(value) => handleChange("services", value)}>
                      <SelectTrigger className={errors.services ? "border-destructive" : ""}>
                        <SelectValue placeholder="Seleccione servicio principal" />
                      </SelectTrigger>
                      <SelectContent>
                        {servicesNeeded.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.services && <p className="text-sm text-destructive">{errors.services}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Detalles Adicionales</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntenos más sobre sus necesidades de limpieza, preferencias de horario o cualquier requerimiento especial..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Obtener Cotización Gratuita
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

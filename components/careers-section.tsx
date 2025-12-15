"use client"

import type React from "react"

import { useState } from "react"
import { Upload, CheckCircle2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CareersSection() {
  const [fileName, setFileName] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFileName("")
    }, 3000)
  }

  return (
    <section id="careers" className="py-20 md:py-28 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-2 border-primary/20 bg-card">
          <CardContent className="pt-12 pb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Únase a Nuestro Equipo
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Estamos en búsqueda de profesionales comprometidos que deseen formar parte de un equipo líder en
                servicios de limpieza comercial. Si está interesado en desarrollar su carrera con nosotros, envíe su
                currículum.
              </p>
            </div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
                <p className="text-lg font-medium text-foreground">Currículum enviado exitosamente</p>
                <p className="text-muted-foreground mt-2">Nos pondremos en contacto con usted a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                    <label
                      htmlFor="resume"
                      className="flex items-center justify-center gap-3 w-full px-6 py-4 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-all"
                    >
                      <Upload className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {fileName || "Seleccionar currículum (PDF, DOC, DOCX)"}
                      </span>
                    </label>
                  </div>

                  {fileName && (
                    <div className="text-sm text-muted-foreground text-center">
                      Archivo seleccionado: <span className="font-medium text-foreground">{fileName}</span>
                    </div>
                  )}

                  <Button type="submit" className="w-full" size="lg" disabled={!fileName}>
                    Enviar Currículum
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Al enviar su currículum, acepta nuestros términos de privacidad.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

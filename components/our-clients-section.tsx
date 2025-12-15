import Image from "next/image";

const clients = [
  { name: "Cliente 19", logo: "/clients/Sport-Club-300x300.png" },
  { name: "Cliente 1", logo: "/clients/Argentina-Rent-Apart.png" },
  { name: "Cliente 2", logo: "/clients/Barent.png" },
  { name: "Cliente 3", logo: "/clients/Bonafide.png" },
  { name: "Cliente 4", logo: "/clients/Casa-Campus.png" },
  { name: "Cliente 5", logo: "/clients/Claridge-Hotel.png" },
  { name: "Cliente 6", logo: "/clients/Clorox-300x300.png" },
  { name: "Cliente 7", logo: "/clients/Eurostars-Hotel.png" },
  { name: "Cliente 8", logo: "/clients/Exe-Hotel-300x300.png" },
  { name: "Cliente 9", logo: "/clients/For-Rent.png" },
  { name: "Cliente 10", logo: "/clients/Guest-Genie-300x300.png" },
  { name: "Cliente 11", logo: "/clients/La-Viruta-300x300.png" },
  { name: "Cliente 12", logo: "/clients/Limpidus-300x300.png" },
  { name: "Cliente 13", logo: "/clients/logo-para-review-300x300.jpg" },
  { name: "Cliente 14", logo: "/clients/My-Lovely-Apart.png" },
  { name: "Cliente 15", logo: "/clients/Pfizer.png" },
  { name: "Cliente 16", logo: "/clients/Praxair.png" },
  { name: "Cliente 17", logo: "/clients/RentAr-Baires.png" },
  { name: "Cliente 18", logo: "/clients/Rentup-300x300.png" },
  { name: "Cliente 20", logo: "/clients/Unilever-300x300.png" },
];

export function OurClientsSection() {
  return (
    <section id="clients" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Nuestros Clientes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Empresas que Confían en Nosotros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Orgullosos de brindar servicios de limpieza profesional a empresas
            líderes en diversos sectores comerciales.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-2 bg-card border border-border rounded-lg hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Logo Container: This provides the fixed space (h-16) for the image to fill */}
              <div
                className="relative w-full h-32 opacity-100
                        transition-all duration-300"
              >
                {/* Standard <img> tag */}
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="absolute top-0 left-0 w-full h-full object-contain"
                  // It is good practice to include width and height, even if overridden by CSS
                  // Use a standard size that covers the parent container's dimensions (e.g., 64px for h-16)
                  width={64}
                  height={64}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react'

const colors = {
  background: "#E0D0EC",
  primary: "#9C030E",
  secondary: "#526B2B",
}

export const Activismo = () => {
  const cards = [
    {
      img: "/refugiosAc.jpeg",
      alt: "Mapa de refugios",
      title: "Mapa de refugios",
      description: "Ubica lugares de cuidado y protección para personas en situación de vulnerabilidad. Espacios donde descansar, recibir apoyo y saber que no estás sola ni solo.",
    },
    {
      img: "/libros.jpg",
      alt: "Lecturas recomendadas",
      title: "Lecturas recomendadas",
      description: "Explora libros, artículos y voces críticas que iluminan realidades, abren conversaciones y fortalecen el pensamiento colectivo.",
    },
    {
      img: "/comunidad trans.jpeg",
      alt: "Colectivos aliados",
      title: "Colectivos aliados",
      description: "Conecta con grupos que luchan por los derechos, la dignidad y la visibilidad. Comunidades que transforman el dolor en fuerza y la resistencia en el futuro.",
    },
  ]

  return (
    <section style={{ backgroundColor: "rgba(0, 0, 0, 0.80)", padding: "80px 20px" }}>
      <div className="container">

        <h2
          className="text-center mb-5"
          style={{ color: colors.primary, fontSize: "clamp(28px, 4vw, 40px)", fontFamily: "'Playfair Display', serif" }}
        >
          Activismo y recursos
        </h2>

        <div className="row justify-content-center g-4">
          {cards.map((card) => (
            <div key={card.title} className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="d-flex flex-column w-100" style={{ backgroundColor: "#C8BFB0" }}>

                <img
                  src={card.img}
                  alt={card.alt}
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                />

                <div className="d-flex flex-column flex-grow-1 p-4">
                  <h3 style={{ color: colors.secondary, fontSize: "clamp(20px, 2.5vw, 27px)", fontWeight: "400", marginBottom: "16px" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "clamp(16px, 2vw, 20px)", lineHeight: "1.7", flexGrow: 1 }}>
                    {card.description}
                  </p>
                  <div className="d-flex justify-content-center mt-3">
                    <button
                      className="btn px-5 py-2"
                      style={{ backgroundColor: colors.secondary, color: colors.background, fontSize: "clamp(16px, 2vw, 20px)" }}
                    >
                      Explorar
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
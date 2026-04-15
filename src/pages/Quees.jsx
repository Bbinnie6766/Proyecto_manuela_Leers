import React from 'react'

const colors = {
  background: "#E0D0EC",
  primary: "#9C030E",
  secondary: "#526B2B",
  userCircle: "#D9D9D9",
}

const propuestas = [
  {
    titulo: "Lectura fragmentada y accesible",
    texto: "Lee en pequeños fragmentos que se adaptan a tu tiempo y ritmo, sin perder la profundidad de la obra.",
  },
  {
    titulo: "Experiencia audiovisual y emocional",
    texto: "Cada escena se acompaña de imágenes y sonidos que potencian la atmósfera y despiertan tus sentidos.",
  },
  {
    titulo: "Diario personal para la introspección",
    texto: "Escribe tus emociones, reflexiones y pensamientos mientras lees, convirtiendo la experiencia en un viaje interior.",
  },
  {
    titulo: "Comunidad que comparte y transforma",
    texto: "Conecta con otros lectores sensibles y críticos para dialogar, crear y transformar la lectura en acción colectiva.",
  },
]

const pilares = [
  { titulo: "Microescenas inmersivas", subtitulo: "leer, escuchar, sentir." },
  { titulo: "Bitácora personal",       subtitulo: "escribir, guardar, reconocerse." },
  { titulo: "Comunidad viva",          subtitulo: "compartir, debatir, actuar." },
]

export const Quees = () => {
  return (
    <>
      {/* ¿Qué es Leersé? */}
      <section style={{ backgroundColor: colors.background, padding: "80px 20px" }}>
        <div className="container">

          <h2
            className="text-center mb-4"
            style={{ color: colors.primary, fontSize: "clamp(28px, 4vw, 40px)", fontFamily: "'Playfair Display', serif" }}
          >
            ¿Qué es Leersé?
          </h2>

          <p style={{ fontSize: "clamp(16px, 2vw, 24px)", lineHeight: "1.8", textAlign: "justify", marginBottom: "60px" }}>
            Leersé es una plataforma digital interactiva inspirada en{" "}
            <em>Las malas</em> de Camila Sosa Villada. Fragmenta el libro en
            microescenas sensoriales, acompaña con imágenes y sonidos, invita a
            la reflexión personal y conecta con una comunidad lectora sensible y
            crítica.
          </p>

          <h2
            className="text-center mb-5"
            style={{ color: colors.primary, fontSize: "clamp(28px, 4vw, 40px)", fontFamily: "'Playfair Display', serif" }}
          >
            Nuestra propuesta
          </h2>

          <div className="row text-start mt-4">
            {propuestas.map((p) => (
              <div key={p.titulo} className="col-12 col-sm-6 col-lg-3 mb-4">
                <h5 style={{ color: colors.secondary, fontSize: "clamp(17px, 2.2vw, 27px)", fontWeight: "400", marginBottom: "24px", lineHeight: "1.4" }}>
                  {p.titulo}
                </h5>
                <p style={{ fontSize: "clamp(15px, 2vw, 24px)", lineHeight: "1.7" }}>
                  {p.texto}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section style={{ backgroundColor: "#C8C0C8", padding: "80px 20px" }}>
        <div className="container">

          <h2
            className="text-center mb-5"
            style={{ color: colors.primary, fontSize: "clamp(28px, 4vw, 40px)", fontFamily: "'Playfair Display', serif" }}
          >
            Nuestros 3 pilares
          </h2>

          <div className="row justify-content-center g-4">
            {pilares.map((p) => (
              <div key={p.titulo} className="col-12 col-sm-8 col-md-4">
                <div
                  className="text-center h-100"
                  style={{ backgroundColor: "rgba(0,0,0,0.80)", padding: "30px", display: "flex", flexDirection: "column" }}
                >
                  <h5 style={{ color: colors.secondary, fontSize: "clamp(17px, 2.2vw, 27px)", fontWeight: "400" }}>
                    {p.titulo}
                  </h5>
                  <p style={{ color: "#ffffff", fontSize: "clamp(15px, 2vw, 24px)", margin: 0 }}>
                    {p.subtitulo}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
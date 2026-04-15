import React from 'react'

const colors = {
  background: "#E0D0EC",
  primary: "#9C030E",
  secondary: "#526B2B",
  userCircle: "#D9D9D9",
}

const testimonios = [
  {
    icono: "/user_icon_149851.png",
    titulo: "Testimonio 1",
    texto: "\"Leer fragmentos me hizo sentir menos sola. Es como si alguien hubiera puesto en palabras lo que nunca me atreví a decir.\"",
  },
  {
    icono: null,
    titulo: "Testimonio 2",
    texto: "\"Con cada microescena recordé a mis amigas de adolescencia, las que me salvaron sin saberlo. Esta lectura me devolvió pedacitos de mi historia.\"",
  },
  {
    icono: "/user_icon_149851.png",
    titulo: "Testimonio 3",
    texto: "\"Escribí en el diario y terminé llorando. No pensé que un libro pudiera abrirme así, como si me hablara al oído.\"",
  },
]

export const Comunidad = () => {
  return (
    <section style={{ backgroundColor: "#C8C0C8", padding: "80px 20px" }}>
      <div className="container">

        <h2
          className="text-center mb-3"
          style={{ color: colors.primary, fontSize: "clamp(28px, 4vw, 40px)", fontFamily: "'Playfair Display', serif" }}
        >
          Comunidad y Mural
        </h2>

        <p
          className="text-center mb-5"
          style={{ color: "#000000", fontSize: "clamp(16px, 2vw, 24px)", lineHeight: "1.6" }}
        >
          Explora lo que nuestros usuarios piensan y sienten. Tu voz también tiene un lugar aquí.
        </p>

        {/*
          xs (< 768px):  col-12 → testimonios apilados, mural debajo
          md (≥ 768px):  col-md-6 → testimonios | mural en dos columnas
        */}
        <div className="row align-items-start g-4">

          {/* Columna testimonios */}
          <div className="col-12 col-md-6 d-flex flex-column" style={{ gap: "16px" }}>
            {testimonios.map((t) => (
              <div
                key={t.titulo}
                style={{ backgroundColor: "#EEEFF0", padding: "24px", display: "flex", alignItems: "flex-start", gap: "16px" }}
              >
                {t.icono
                  ? <img src={t.icono} style={{ width: "40px", height: "40px", opacity: 0.5, flexShrink: 0 }} alt="" />
                  : <div style={{ width: "40px", height: "40px", flexShrink: 0 }} />
                }
                <div>
                  <h5 style={{ color: colors.secondary, fontSize: "clamp(18px, 2.5vw, 27px)", fontWeight: "400", marginBottom: "10px" }}>
                    {t.titulo}
                  </h5>
                  <p style={{ fontSize: "clamp(15px, 2vw, 24px)", lineHeight: "1.6", textAlign: "justify", margin: 0 }}>
                    {t.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Columna mural */}
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <img
              src="/moodboard.png"
              alt="Mural comunidad"
              style={{ width: "100%", maxWidth: "420px", objectFit: "contain" }}
            />
          </div>

        </div>

        {/* Deja tu reflexión */}
        <div style={{ backgroundColor: "#ffffff", padding: "clamp(24px, 4vw, 48px) clamp(16px, 4vw, 40px)", marginTop: "60px" }}>
          <h2
            className="text-center mb-4"
            style={{ color: colors.primary, fontSize: "clamp(28px, 4vw, 40px)", fontFamily: "'Playfair Display', serif" }}
          >
            Deja tu reflexión
          </h2>

          <textarea
            placeholder="Escribe aquí."
            style={{
              width: "100%",
              height: "clamp(200px, 30vw, 384px)",
              backgroundColor: "#5a5a5a",
              color: "#cccccc",
              fontSize: "clamp(15px, 2vw, 24px)",
              padding: "20px",
              border: "none",
              resize: "none",
              outline: "none",
            }}
          />

          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn px-5 py-2"
              style={{ backgroundColor: colors.secondary, color: colors.background, fontSize: "clamp(15px, 2vw, 24px)" }}
            >
              Enviar reflexión
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
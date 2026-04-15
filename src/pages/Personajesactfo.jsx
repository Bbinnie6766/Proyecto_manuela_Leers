import React from 'react'

const colors = {
  background: "#E0D0EC",
  primary: "#9C030E",
  secondary: "#526B2B",
  userCircle: "#D9D9D9",
}

const personajes = [
  {
    img: "/1camila.png",
    alt: "Camila",
    nombre: "Camila",
    descripcion: "Soy Camila, travesti, escritora y sobreviviente. En mi piel llevo la memoria de una infancia marcada por la soledad y la vergüenza, pero también por la rebeldía de no dejarme borrar. Escribo para que nuestra voz arda y no se apague nunca. Si me lees, ya no estoy sola.",
    imgDerecha: false,
  },
  {
    img: "/2tiaen.png",
    alt: "Tia Encarna",
    nombre: "Tia Encarna",
    descripcion: "Dicen que soy vieja, pero yo me digo sabia. Soy la madre travesti de todas, la que acoge, la que alimenta, la que enseña que el dolor también se puede compartir. Abrí mi casa para que nadie durmiera en la calle, y aunque mis huesos crujan, sigo de pie, sosteniéndonos.",
    imgDerecha: true,
  },
  {
    img: "/3amiga.png",
    alt: "Claudia",
    nombre: "Claudia",
    descripcion: "Soy Claudia, travesti como mis hermanas, aunque a veces me siento más invisible que ellas. He aprendido a reír fuerte para que no se note el miedo, y a maquillarme como armadura contra el desprecio del mundo. Sueño con un futuro distinto, pero mientras llega, bailo, amo y sigo viva.",
    imgDerecha: false,
  },
]

const Botones = () => (
  <div className="d-flex justify-content-between align-items-center mt-3">
    <button onClick={() => {}} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
      <img src="/megafonono.png" alt="Audio" style={{ width: "32px", height: "32px" }} />
    </button>
    <button onClick={() => {}} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
      <img src="/corazon.png" alt="Me gusta" style={{ width: "32px", height: "32px" }} />
    </button>
  </div>
)

export const Personajesactfo = () => {
  return (
    <section style={{ backgroundColor: colors.background, padding: "80px 20px" }}>
      <div className="container">

        <h2
          className="text-center mb-3"
          style={{ color: colors.primary, fontSize: "clamp(28px, 4vw, 40px)", fontFamily: "'Playfair Display', serif" }}
        >
          Galería de personajes
        </h2>

        <p className="text-center mb-5" style={{ fontSize: "clamp(16px, 2vw, 24px)", lineHeight: "1.6" }}>
          Conoce a algunos de los personajes que viven en la historia de leersé.
        </p>

        {personajes.map((p) => (
          <div key={p.nombre} className="row align-items-center mb-5 g-4">

            <div
              className={`col-12 col-md-4 d-flex justify-content-center
                order-1 ${p.imgDerecha ? "order-md-2" : "order-md-1"}`}
            >
              <img
                src={p.img}
                alt={p.alt}
                style={{
                  width: "clamp(160px, 30vw, 260px)",
                  height: "clamp(160px, 30vw, 260px)",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              className={`col-12 col-md-8
                order-2 ${p.imgDerecha ? "order-md-1" : "order-md-2"}`}
            >
              <h3 style={{ color: colors.secondary, fontSize: "clamp(18px, 2.5vw, 27px)", fontWeight: "400", marginBottom: "16px" }}>
                {p.nombre}
              </h3>
              <p style={{ fontSize: "clamp(15px, 2vw, 24px)", lineHeight: "1.7", textAlign: "justify" }}>
                {p.descripcion}
              </p>
              <Botones />
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}
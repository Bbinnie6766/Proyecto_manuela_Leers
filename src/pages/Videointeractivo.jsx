import React, { useState, useRef } from 'react'

const colors = {
  background: "#E0D0EC",
  primary: "#9C030E",
  secondary: "#526B2B",
}
/* SUBIR UN VIDEO DE MENOS DE 100MB */
const VIDEO_URL = "/Cap.mp4"

export const Videointeractivo = () => {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying(true)
    videoRef.current?.play() }

  return (
    <section style={{ backgroundColor: "#000000", padding: "80px 20px" }}>
      <div className="container">

        <h2 className="text-center mb-3" style={{ color: colors.primary, fontSize: "clamp(28px, 4vw, 40px)", fontFamily: "'Playfair Display', serif" }} >
          Demo interactivo </h2>

        <p style={{ color: "#ffffff", fontSize: "clamp(16px, 2vw, 24px)", lineHeight: "1.6", marginBottom: "30px" }}>
          Sumérgete en la historia de Las Malas con elementos multimedia y una pregunta que te hará reflexionar. </p>

        <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", backgroundColor: "#111" }}>

          <video
            ref={videoRef}
            controls={playing}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: playing ? "block" : "none", }} >
            <source src={VIDEO_URL}/>
          </video>

          {!playing && (
            <>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "url('/camila-sosa-villada-1365107.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.60)" }} />

              <div
                className="d-flex align-items-center justify-content-center"
                style={{ position: "absolute", inset: 0, zIndex: 1 }}
              >
                <div
                  onClick={handlePlay}
                  style={{
                    width: "clamp(56px, 8vw, 80px)",
                    height: "clamp(56px, 8vw, 80px)",
                    borderRadius: "50%",
                    border: "3px solid #ffffff",
                    backgroundColor: "rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "16px solid transparent",
                      borderBottom: "16px solid transparent",
                      borderLeft: "26px solid #ffffff",
                      marginLeft: "6px",
                    }}
                  />
                </div>
              </div>
            </>
          )}

        </div>

        <p
          style={{ color: "#ffffff", fontSize: "clamp(15px, 2vw, 24px)", lineHeight: "1.7", textAlign: "justify", marginTop: "40px", marginBottom: "16px", }} >
          En Córdoba, en el parque Sarmiento, nocturno y marginal, Camila, una mujer trans de unos inciertos 20 años
          recién llegada de su pueblo, busca un lugar donde pertenecer. </p>

        <p className="text-center" style={{ color: colors.primary, fontSize: "clamp(15px, 2vw, 24px)", fontStyle: "italic" }} >
          ¿Dónde te reconoces en esta historia? </p>

      </div>
    </section>
  )
}
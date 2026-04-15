import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const colors = {
  background: "#E0D0EC",
  primary: "#9C030E",
  secondary: "#526B2B",
  userCircle: "#D9D9D9",
}

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg px-3" style={{ backgroundColor: colors.background }}>
        <div className="container-fluid">

          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <img
              src="/Imagotipo_Leersé.png"
              style={{ width: "48px", height: "48px", objectFit: "contain" }}
              alt="Leersé logo"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
            aria-controls="navContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ borderColor: colors.secondary }}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navContent">
            <div className="d-flex flex-column flex-lg-row gap-3 ms-lg-auto align-items-lg-center mt-3 mt-lg-0">
              <a href="#" className="text-decoration-none" style={{ color: colors.secondary }}>
                Leersé
              </a>
              <a href="#" className="text-decoration-none" style={{ color: colors.secondary }}>
                Animación
              </a>
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "42px", height: "42px", backgroundColor: colors.userCircle }}
              >
                <img
                  style={{ width: "1.6rem", height: "1.6rem" }}
                  src="/user_icon_149851.png"
                  alt="Usuario"
                />
              </div>
            </div>
          </div>

        </div>
      </nav>

      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          minHeight: "80vh",
          position: "relative",
          backgroundImage: "url('/imgportada.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(224, 208, 236, 0.55)",
          }}
        />

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">

              <h1
                style={{
                  color: colors.primary,
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: "1.4",
                }}
                className="fs-2 fs-md-1 mb-4"
              >
                Leersé: una experiencia de lectura expandida que conecta emociones,
                pensamiento crítico y comunidad.
              </h1>

              <div className="row justify-content-center g-2 mt-2">
                <div className="col-12 col-sm-auto">
                  <button
                    className="btn w-100 px-4 py-2"
                    style={{ backgroundColor: colors.secondary, color: colors.background }}
                  >
                    Explorar la demo
                  </button>
                </div>
                <div className="col-12 col-sm-auto">
                  <button
                    className="btn w-100 px-4 py-2"
                    style={{ backgroundColor: colors.secondary, color: colors.background }}
                  >
                    Conocer más
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
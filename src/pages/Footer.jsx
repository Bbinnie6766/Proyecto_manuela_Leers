import React from 'react'

const colors = {
    background: "#E0D0EC",
    primary: "#9C030E",
    secondary: "#526B2B",
    userCircle: "#D9D9D9",
}


export const Footer = () => {
    return (
        <>
            <footer style={{ backgroundColor: "#EEEEEE", padding: "48px 20px" }}>
                <div className="container d-flex flex-column align-items-center" style={{ gap: "12px" }}>

                    {/* Iconos redes sociales */}
                    <div className="d-flex gap-3">
                        <a href="#" style={{ cursor: "pointer" }}>
                            <img src="/instagram.png" alt="Instagram" style={{ width: "48px", height: "48px", objectFit: "contain" }} />
                        </a>
                        <a href="#" style={{ cursor: "pointer" }}>
                            <img src="/facebook.png" alt="Facebook" style={{ width: "48px", height: "48px", objectFit: "contain" }} />
                        </a>
                    </div>

                    <p style={{ fontSize: "24px", margin: 0, color: "#000000" }}>
                        Contacto: lasmalas@gmail.com
                    </p>

                    <a href="#" className="text-decoration-none" style={{ fontSize: "24px", color: "#000000" }}>
                        Créditos y aliados
                    </a>

                </div>
            </footer>
        </>
    )
}

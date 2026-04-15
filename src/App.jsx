import React from 'react'
import { Header } from './components/Header'
import { Comunidad } from './pages/Comunidad'
import { Quees } from './pages/Quees'
import { Videointeractivo } from './pages/Videointeractivo'
import { Personajesactfo } from './pages/Personajesactfo'
import { Activismo } from './pages/Activismo'
import { Footer } from './pages/Footer'

export const App = () => {
  return (
    <>
      <Header />

      <section id='Quees'>
        <Quees/>
      </section>

      <section id='Videointeractivo'>
        <Videointeractivo/>
      </section>

      <section id='Comunidad'>
        <Comunidad/>
      </section>

      <section id='Personajesactfo'>
        <Personajesactfo/>
      </section>

      <section id='Activismo'>
        <Activismo/>
      </section>

      <Footer/>
    </>
  )
}

export default App
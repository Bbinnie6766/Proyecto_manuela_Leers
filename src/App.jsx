import React from 'react'
import { Header } from './components/Header'
import { Comunidad } from './pages/Comunidad'
import { Quees } from './pages/Quees'
import { Videointeractivo } from './pages/Videointeractivo'
import { Personajesactfo } from './pages/Personajesactfo'
import { Activismo } from './pages/Activismo'
import { Footer } from './pages/Footer'
import { Texto } from './components/Texto'

export const App = () => {
  return (
    <>
      <Header />
      <Quees />
      <Videointeractivo/>
      <Comunidad/>
      <Personajesactfo/>
      <Activismo/>
      <Footer/>
      <Texto/>
    </>
  )
}

export default App
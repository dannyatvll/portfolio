import Footer from '../components/Footer.jsx'
import NavBar from '../components/NavBar'
import React from 'react'
import fotoInflu from "../assets/images/FotoInflu.png"



function LandingPage() {
  return (
    <div>
      <NavBar/>
      <div>
          <h1>Danny Atiencia</h1>
          <p>Desarollador Web Full Stack</p>
          <img alt="Foto Danny Atiencia" src={fotoInflu}/>
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPage;
import React from "react";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const AboutMe = () => {
  return (
    <>
    <NavBar/>
    <div>
      <h1>Danny Atiencia</h1>
      <p>Nacido en Ecuador un 24 de Septiembre de 1999, a la edad de 3 años mis padres emigran a España en busca de un futuro mejor.</p>
      <p>Crezco en Almeria y paso alli el mayor tiempo de mi vida, hasta que a los 18 decido emprender mi busqueda propia y me mudo a Madrid</p>
      <p>Llego sin saber mucho, mas bien teniendo poca idea de todo, era la primera vez que vivia en una ciudad tan grande, ademas sin practicamente ayuda y sin conocidos.</p>
      <p>Consigo alquilar una habitacion en Malasaña y aqui empieza mi andadura.</p>
      <p>Consig trabajo en un restaurante en el centro de Madrid, donde con esfuerzo y sacrificio en menos de 2 años estoy como jefe de sala, pero de repente todo para, se detiene por un segundo el tiempo, un 14 de marzo que muy seguramente todos recordemos siempre</p>
      <p>Llega la pandemia</p> 
      <p>Conocido popularmete como Coronavirus llega para cambiarnos la vida a todos, y sin duda me la cambia a mi</p>
    </div>
    <Footer/>
    </>
  );
};

export default AboutMe
import React from 'react'

// Imports from FortAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {


    return(
        <div className="footerPadre">
            <p>Contacta conmigo en: </p>
            <div className="contact">
                <a href="tel: 693907064">+34 693907064</a>
                <a href="mailto: danny24999@gmail.com">danny24999@gmail.com</a>
                <a href="facebook.com"><FontAwesomeIcon icon={faInstagram} />Mi instagram</a>
                <a href="https://www.linkedin.com/in/danny-atiencia-26084512a/"><FontAwesomeIcon icon={faLinkedin} />Mi Linkedin</a>
            </div>
         </div>
    )
}

export default Footer
import { Link } from "react-router-dom"
import React from 'react'

const NavBar = () => {
    return(
        <div className="navBarPadre">
          <Link to="/aboutme">About Me</Link>
          <Link to="/porfolio">Proyectos</Link>
          <Link to="/curriculum">Curriculum</Link>
        </div>
    )
}

export default NavBar
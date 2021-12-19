import {Link} from "react-router-dom"
import React from "react";

const AboutMe = () => {
  return (
    <div>
      <p>Este soy yo</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default AboutMe
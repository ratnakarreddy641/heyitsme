import React from "react";
import Wave from "../hello.png";
import Twitter from "../twitter.png";
import Linkedin from "../linkedin.png";

function Intro() {
  return (
    <div className="Intro">
      <h6>Hey It's Me,</h6>
      <h3><span>{"<h3> "}</span>Ratnakar Reddy<span>{" </h3>"}</span></h3>
      <p>Associate Software Engineer, Accenture</p>
      <div className="socials">
        <a href="https://www.linkedin.com/in/ratnakar-reddy-m/"><img className="socialIcons" src={Linkedin}/></a>
        <a href="https://twitter.com/RatnakarReddy_M"><img className="socialIcons" src={Twitter}/></a>
      </div>
      
    </div>
  );
}

export default Intro;

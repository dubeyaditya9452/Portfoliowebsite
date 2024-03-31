import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div>
      <div className="About-container">
        <div className="content">
         <h2>My name is Aditya Dubey</h2>
         <p>I'm an enginnering graduate specializing in computer science   &  enginnering from GLA University,  Mathura.  Along  my degree I completed the course of basic of OOPs in java. Morever I also learned the basic of frontend development using HTML ,CSS, BOOTSTRAP, JAVASCRIPT and REACT JS.</p>
         <div className="container">
         <Link to="/contact">
              <button> Hire Me</button>
            </Link>
         </div>
        </div>
        <div className="about-image">
           <img src="../Aditya.jpeg"  alt="Aditya" height={"350px"}></img>
        </div>
      </div>
    </div>
  )
}

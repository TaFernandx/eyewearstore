import React from "react";
import './style.css';

export default function Footer () {
    return (
        <footer>
            <div>
                <p>2023 Oticas Vida - Developed by: Fernando Tavares</p>
            </div>

            <div className="contactme">
            <div className="linkedin , grow">
                <a href="https://www.linkedin.com/in/tafernando/"target="_blank" ><img src="assets/linkedinlogo.png"/> See my Linkedin!</a>
            </div>
            <div className="resume , grow">
                <a href="./assets/resume.pdf"target="_blank" ><img src="assets/resume.png"/>See my Resume!</a>
            </div>
            </div>
        </footer>
    )
}
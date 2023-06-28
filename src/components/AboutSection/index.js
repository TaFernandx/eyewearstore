import React from "react";
import './style.css';

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container-about, limitar-secao">
                <h1>Who we are?</h1>
                <p>Created in 2001 in Rio Grande - RS, the Óticas Vida begun
                    her activities focused in the poorer clients, with acessibility for
                    those who cannot pay thousands for Glasses.
                </p>

                <div className="box-cards">
                <img src="assets/loja.png"/>
                    <div className="card">
                        <h2>Our stores</h2>
                        <p>Today we have more than 20 stores scattered on Brazil</p>
                    </div>
                
                    <div className="card">
                        <h2>Specialized Assistance</h2>
                        <p>Our team is trained to help you identify what
                            you need!
                        </p>
                    </div>
                    <img src="assets/atendimento.png"/>
                </div>
                
            </div>
        </section>
    )
}
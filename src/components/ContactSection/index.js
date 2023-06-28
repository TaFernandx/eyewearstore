import React from "react";
import './style.css';


export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="limitar-secao">
                <h1>Contact Us</h1>
                <p>Don't delay! Come to one of our Stores or get in touch
                    through our Social Media!
                </p>

                <div className="contacts">
                    <div className="contactus">
                        <h4>Contact</h4>
                        <div>
                            <img src="assets/local.png" title="Localization icon" alt="Localization Pin"/>
                            <span>Rio Grande, RS</span>
                        </div>

                        <div>
                            <img src="assets/telefone.png" title="Phone icon" alt="Phone Icon"/>
                            <span>(53) 99999-9999</span>
                        </div>

                        <div>
                            <img src="assets/email.png" title="Email icon" alt="Email icon"/>
                            <span>contact@email.com</span>
                        </div>
                    </div>

                    <div className="contactus">
                        <h4>Social Media</h4>
                        <div>
                            <img src="assets/fb.png" title="Facebook icon" alt="Facebook Logo"/>
                            <span>/OticaVida</span>
                        </div>

                        <div>
                            <img src="assets/ig.png" title="Instagram icon" alt="Instagram Logo"/>
                            <span>@OticaVida</span>
                        </div>

                        <div>
                            <img src="assets/tt.png" title="Twitter icon" alt="Twitter Logo"/>
                            <span>@OticaVida</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
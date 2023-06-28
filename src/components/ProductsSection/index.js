import React from "react";
import './style.css';

export default function Products () {
    return (
        <section id='products' className="products">
        <div className="limitar-secao">
            <div>
                <h1>Our Products</h1>
                <p>We work with Prescription glasses, sunglasses, transitions lens and more! Masculine,
                    Feminine and children models!</p>
                <p>We focus on cheap prices and the best quality!</p>
            </div>

            <div className="container-products">
                <div className="cards">
                    <h2>Prescription glasses</h2>
                    <img src="assets/oculos01.png" alt="Prescription Glasses"/>
                    <h3>R$ 500,00</h3>
                </div>
                <div className="cards">
                    <h2>Glasses with Transition Lens</h2>
                    <img src="assets/oculos02.png" alt="Transition Lens"/>
                    <h3>R$ 750,00</h3>
                </div>
                <div className="cards">
                    <h2>Sunglasses</h2>
                    <img src="assets/oculos03.png" alt="Sunglasses"/>
                    <h3>R$ 700,00</h3>
                </div>
                <div className="cards">
                    <h2>Glasses for Kids</h2>
                    <img src="assets/oculos04.png" alt="Kids Glasses"/>
                    <h3>R$ 500,00</h3>
                </div>
            </div>

            <p>All products include:</p>
            <ul>
                <li>1 year Guarantee</li>
                <li>Preventive Maintance</li>
                <li>Special Descount for purchase of 2th unit</li>
                <li>Payment flexibility</li>
            </ul>
        </div>
        </section>
    )
}
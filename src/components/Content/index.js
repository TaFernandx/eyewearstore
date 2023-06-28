import React from "react";
import SecaoCapa from "../BannerSection";
import Products from "../ProductsSection";
import About from "../AboutSection";
import Contact from "../ContactSection";



export default function Content() {
    return (
        <main>
            <SecaoCapa />
            <Products />
            <About />
            <Contact />
        </main>
    )
}
import React from 'react';
import './style.css';

export default function Topo() {
    return (
        <header>
            <div className='limitar-secao'>
                <img src='assets/logo.png' alt='Logo' />

                <nav>
                    <a href='#products'>Products</a>
                    <a href='#about'>About Us</a>
                    <a href='#contact'>Contact</a>
                </nav>
            </div>
        </header>
    )
}
import React from 'react';
import './Footer.css';

function Footer() {
    const text = 'some text';
    return (
        <footer>
            <h3>Footer component!</h3>
            <p>{text}</p>
        </footer>
    );
}

export default Footer;
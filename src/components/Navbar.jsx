import React from 'react'
import '../css/navbar.css'
import logo from '../img/NicePng_amazon-logo-png_167642.png'
import NavLogo from '../img/nav-icon.png'

export default function Navbar() {
    return (
        <nav id='navbar'>
            <header id="upper-navbar">
                <div id="main-logo">
                    <img src={logo} alt="Amazon Logo" />
                </div>
                <div id="deliver">
                    <img src={NavLogo} alt="" />
                    <div id="deliver-text">
                        <span>Deliver to</span>
                        <span>Pakistan</span>
                    </div>
                </div>
            </header>
        </nav>
    )

}


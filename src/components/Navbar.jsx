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
                        <span id='span-1'>Deliver to</span>
                        <span id='span-2'>Pakistan</span>
                    </div>
                </div>
                <form action="#">
                    <div id="nav-search-bar">
                        <div id="selection-box">
                            <select name="Books" id="selection-menu">
                                <option value="Books">Books</option>
                            </select>
                        </div>
                        <input type="text" name="Name" id="search-bar" placeholder='Search Here' />
                    </div>
                </form>
            </header>
        </nav>
    )

}


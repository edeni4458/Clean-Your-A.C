import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../5-logo/logo.png';
import './navbar.css'

const NavBar = () => {
    return (
        <div className='navbar-main-container'>
            <div className='header'>
                {/* make logo a link */}
                <img className='logo' src={logo} alt='logo of company'/>
                <h1>Clean Your A.C</h1>
            </div>
            <div className='links'>
                <li>home</li>
                <li>about us</li>
                <li>contact us</li>
            </div>
        </div>
    )
}

export default NavBar
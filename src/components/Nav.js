import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import Logo from './images/Logo.png'
import './Nav.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Nav = () => {
    
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={Logo} />
                </div>
                <ul className='nav-links'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Gallery</a></li>
                    
                    <li><a href="#">Services</a></li>
               
                    <li><a href="#">Book</a></li>
               
                    <li><a href="#">Contact-us</a></li>
                    <li><a href="#">About-us</a></li>
                    <li><a href="#"><AccountCircleIcon/></a></li>
                    
                </ul>
               
                <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                </div>
               

            </nav>
        </div>
    )
}

export default Nav

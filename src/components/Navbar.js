import React, { useState } from 'react';
import {Button} from './Button';
import './Navbar.css';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import { GiFlame } from "react-icons/gi";
import { FaTimes, FaBars, FaCaretDown } from "react-icons/fa";


function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const onMousEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        } else{
            setDropdown(true);
        }
    };

    const onMousLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        } else{
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    OMG <GiFlame />
                </Link> 
                <div className = 'menu-icon' onClick ={handleClick}>
                   {click?<FaTimes className = 'fa'/>:<FaBars className = 'fa'/>} 
                </div>
                <ul className={click? 'nav-menu active': "nav-menu"}>
                    <li className = 'nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className = 'nav-item'
                    onMouseEnter={onMousEnter}
                    onMouseLeave={onMousLeave}>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services<FaCaretDown/>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>

                    <li className = 'nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button/>
            </nav>
        </>
    )
}

export default Navbar;
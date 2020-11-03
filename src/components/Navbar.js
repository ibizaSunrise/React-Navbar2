import React, { useState } from 'react'
// import { Button } from '.Button'
// import '.Navbar.css'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import { GiFlame } from "react-icons/gi";
import { FaTimes, FaBars, FaCaretDown } from "react-icons/fa";


function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    OMG<GiFlame />
                </Link> 
                <div className = 'menu-icon' onClick ={handleClick}>
                   {click?<FaTimes/>:<FaBars/>} 
                </div>
                <ul className={click? 'nav-menu active': "nav-menu"}>
                    <li className = 'nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services<FaCaretDown/>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
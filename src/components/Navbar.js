import React from 'react'
import { Link } from 'react-router-dom';
import "../index.css";
        const Navbar = () => {
            return (
                <nav className='navbar'>
                   <Link style={{color:"white"}} to='/contact-list'>Contacts</Link> 
                </nav>
            )
        }

export default Navbar;

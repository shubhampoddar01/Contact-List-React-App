import React from 'react'
import { Link } from 'react-router-dom';
import "../index.css";
        const Navbar = () => {
            return (
                <nav className='navbar'>
                   <Link style={{color:"white"}} to='/Contact_List_App'>Contacts</Link> 
                </nav>
            )
        }

export default Navbar;

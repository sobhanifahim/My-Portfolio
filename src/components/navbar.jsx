import { useState } from 'react';
import Nav from '../style/navbar.module.css'


export default function Navbar({ scrollToSection }) {
   const [menuOpen,setMenuOpen]=useState(false)
   const toggleMenu=()=>{
    setMenuOpen(!menuOpen);
   }

    return(
        <div className={Nav.box}>
            <button className={Nav.menuButton} onClick={toggleMenu}>&#9776;</button>
            <div className={`${Nav.options} ${menuOpen ? Nav.open : ''}`}>
                <ul>
                    <li onClick={()=>scrollToSection('home')}>Home</li>
                    <li onClick={()=>scrollToSection('experience')}>Experience</li>
                    <li onClick={()=>scrollToSection('education')}>Education</li>
                    <li onClick={()=>scrollToSection('skill')}>Skills</li>
                    <li onClick={()=>scrollToSection('project')}>Projects</li>
                    <li onClick={()=>scrollToSection('contact')}>Contacts</li>

                </ul>
            </div>
        </div>
    );
};

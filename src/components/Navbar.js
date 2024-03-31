
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
export default function Navbar() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div><>
    <nav>
         
        <label htmlFor=""  className='logo'>Aditya</label>
        <div className="menu" onClick={()=>{
          setMenuOpen(!menuOpen)
        }}>
          <span></span>
          <span></span>
          <span></span>

        </div>
      
      
      <ul className={menuOpen ? "open" : ""}>
       <li><Link to=""className='link'>Home</Link></li>
       <li><Link to="/About" className='link'>About</Link></li>
       <li><Link to="/Portfolio" className='link'>Portfolio</Link></li>
       <li><Link to="/Contact" className='link'>Contact</Link></li>

      </ul>
      
    </nav>

    </></div>
  )
}

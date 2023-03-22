import './Navbar.css'
import React from 'react'
import logoNav from '../../images/logo-navbar.png'
import { useState } from 'react' 
// import PensanoDevs2 from '../images/PensanoDevs2.png'

export default function Navbar({ handleOurProjects, toggleComponents }) {

    const [open, setOpen] = useState(false);

    function DropdownMenu() {
        return (
          <div className="dropdown-container">
            <div className="dropdown">
              <a href="/#/josh" className="menu-item" onClick={() => setOpen(!open)}>Josh</a>
              <a href="/#/luiz" className="menu-item" onClick={() => setOpen(!open)}>Luiz</a>
              <a href="/#/juliana" className="menu-item" onClick={() => setOpen(!open)}>Juliana</a>
              <a href="/#/rachel" className="menu-item" onClick={() => setOpen(!open)}>Rachel</a>
            </div>
          </div>
        );
      }
      
    
    return (
        <div className='navbar'>
            <img src={logoNav} width="200" onClick={() => {
                handleOurProjects(false)
                toggleComponents(true)
            }}/> 
            <div className="team-container">
                <button className="button" onClick={() => setOpen(!open)}>The Team</button>
                {open && DropdownMenu()}
            </div>
            <div className='our-projects'>
                <button onClick={() => {
                    handleOurProjects(true)
                    toggleComponents(false)
                }}>Our Projects</button>
                <a href='https://makers.tech' target="_blank">Makers</a>
            </div>
        </div>
        )
}
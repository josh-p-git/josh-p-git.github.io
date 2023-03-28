import './Navbar.css'
import React from 'react'
import { useNavigate } from "react-router-dom";
import logoNav from '../../images/logo-navbar.png'
import makersLogo from '../../images/logo-makers.png'
import { useState } from 'react' 

export default function Navbar({ handleOurProjects, toggleComponents }) {

    const [open, setOpen] = useState(false);
    const [showComponents, setShowComponents] = useState(true)

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
    
    const navigate = useNavigate();

    function handleClick(path) {
        navigate(path);
      }
    
    return (
        <div className='navbar'>
            <img src={logoNav} width='150' onClick={() => {
                handleOurProjects(false)
                toggleComponents(true)
            }}/> 
            <div className='team-container'>
                <button className='button' onClick={() => setOpen(!open)}>The Team</button>
                {open && DropdownMenu()}
            </div>
            <div className='our-projects'>
                <button onClick={() => {
                    handleOurProjects(true)
                    toggleComponents(false)
                }}>Our Projects</button>
            </div>
            {showComponents && (
              <div className='navbar-button'>
                <a href='https://makers.tech' target="_blank">
                  <img className='makers-logo' src={makersLogo} alt='Makers Academy'/>
                  </a>
              </div>)}
        </div>
        )
}
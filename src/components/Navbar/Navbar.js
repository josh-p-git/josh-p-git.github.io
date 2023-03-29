import './Navbar.css'
import React from 'react'
import { useNavigate } from "react-router-dom";
import logoPensano from '../../images/logo-pensano.png'
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
            <img src={logoPensano} width='150' onClick={() => {
                handleClick('/')
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
        </div>
        )
}
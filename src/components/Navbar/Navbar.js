import './Navbar.css'
import React from 'react'
import logoNav from '../../images/logo-navbar.png'
// import PensanoDevs2 from '../images/PensanoDevs2.png'

export default function Navbar({ handleOurProjects, toggleComponents }) {
    return (
        <div className="navbar">
            <img src={logoNav} width="100" onClick={() => {
                handleOurProjects(false)
                toggleComponents(true)
            }}/> 
            <div className="our-projects">
                <button onClick={() => {
                    handleOurProjects(true)
                    toggleComponents(false)
                }}>our projects</button>
                <a href='https://makers.tech' target="_blank">makers</a>
            </div>
        </div>
        )
}
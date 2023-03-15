import './Navbar.css'
import React from 'react'
// import PensanoDevs2 from '../images/PensanoDevs2.png'

export default function Navbar({ handleOurProjects }) {
    return (
        <div>
            <img src="/PensanoDevs2.png" width="400" onClick={() => handleOurProjects(false)}/> 
            <div className="our-projects">
                <button onClick={() => handleOurProjects(true)}>our projects</button>
                <a href='makers.tech' target="_blank">makers</a>
            </div>
        </div>
        )
}
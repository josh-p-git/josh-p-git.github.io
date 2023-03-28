import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import Navbar from '../Navbar/Navbar';
import OurProjects from '../OurProjects/OurProjects';
import ProfilePic from '../ProfilePic/ProfilePic';
import './Home.css';

import Josh from '../Josh/Josh';
import Luiz from '../Luiz/Luiz';
import Juliana from '../Juliana/Juliana';
import Rachel from '../Rachel/Rachel';

import pinkDots from '../../images/pink-dots.png'
import fourDiamonds from '../../images/four-diamonds.svg'

import josh from '../../images/Josh.svg'
import luiz from '../../images/Luiz.svg'
import juliana from '../../images/Ju.svg'
import rachel from '../../images/Rachel.svg'


function Homepage() {
  const navigate = useNavigate();

  const [showJosh, setShowJosh] = useState(false)
  const [showLuiz, setShowLuiz] = useState(false)
  const [showJuliana, setShowJuliana] = useState(false)
  const [showRachel, setShowRachel] = useState(false)
  const [showOurProjects, setShowOurProjects] = useState(false)
  const [showComponents, setShowComponents] = useState(true)

  const toggleComponents = (show) => {
    setShowComponents(show)
  }

  const handleJosh = () => {
    setShowJosh(false)
    setShowOurProjects(false)
  }

  const handleLuiz= () => {
    setShowLuiz(false)
  }

  const handleJuliana= () => {
    setShowJuliana(false)
  }

  const handleRachel= () => {
    setShowRachel(false)
  }

  const handleOurProjects= (show) => {
    setShowOurProjects(show)
  }

  function handleClick(path) {
    navigate(path);
  }

  return (
    <div className='page-container'>
      <div>
        <Navbar handleOurProjects={handleOurProjects} toggleComponents={toggleComponents}/>
      </div>

      {showComponents && (
        <div className='team-container-one'>
          <div className='.photo-josh-rachel-container'>
            <img className='josh-photo' src={josh} alt='Joshs photo' onClick={() => handleClick('/josh')} />
            <p style={{ color: '#323B60', fontWeight: 'bold', cursor: 'pointer', textAlign: 'center' }}>Josh </p>
          </div>

          <div className='.photo-josh-rachel-container'>
            <img className='rachel-photo' src={rachel} alt='Rachels photo' onClick={() => handleClick('/rachel')} />
            <p style={{ color: '#323B60', fontWeight: 'bold', cursor: 'pointer', textAlign: 'center' }}>Rachel </p>
          </div>
        </div>)}

      {showComponents && (
        <div className='team-container-two'>
          <div className='photo-ju-luiz-container'>
            <img className='juliana-photo' src={juliana} alt='Julianas photo' onClick={() => handleClick('/juliana')} />
            <p>Juliana</p>
          </div>

          <div className='photo-ju-luiz-container'>
            <img className='luiz-photo' src={luiz} alt='Luizs photo' onClick={() => handleClick('/luiz')} />
            <p>Luiz</p>
          </div>
        </div>)}
        
        
        <div className='text-container'>
          <p className='header'> Pensano Developers is a team of software engineers who are available to hire for job roles in the UK.</p>
          <p className='pink-line'></p>
          <p className='text'> Pensano is Italian for they think; and the developers at Pensano Developers do just that: they are problem solvers, they think outside the box, and they are deliberate.</p>
          <p className='text'> As graduates from Makers Academy, each is skilled at working in agile environments, test-driven development, object-oriented programming, and at quickly adapting to new tech stacks.</p>
          <p className='text'> This site is designed to showcase our work both collectively, as Pensano Devs, and our individual projects. Please take a look around.</p>
        </div>

        {/* <div className='pink-dots'>
          <img style={{ width: 700, height: 75 }} src={pinkDots} alt='Pink dots line'/> */}

      <div>
        {showOurProjects && <OurProjects />}
      </div>
      
      <div className='four-diamonds'>
        <img className='four-diamonds' src={fourDiamonds} alt='Four diamonds'/>
      </div>

      <div className='footer-container'>
          <div>
            <button className='footer-text' onClick={() => handleClick('/our-projects')}>Check out our projects here.</button>
            <p></p>
          </div>
      </div>
    </div>
  );
}

export default Homepage;
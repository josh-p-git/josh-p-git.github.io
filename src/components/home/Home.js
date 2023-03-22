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

import pinkLine from '../../images/pink-line.svg'
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
        <div className='face-buttons-container'>
          
          <div className='face-buttons-box'>
            <button className='face-button' onClick={() => handleClick('/josh')}><ProfilePic imageProp={josh} /></button>
          </div>
  
          <div className='face-buttons-box'>
            <button className='face-button' onClick={() => handleClick('/luiz')}><ProfilePic imageProp={luiz} /></button>
          </div>
  
          <div className='four-diamonds'>
          <img style={{ width: 150, height: 75 }} src={fourDiamonds} alt='Four diamonds'/>
        </div>

          <div className='face-buttons-box'>
          <button className='face-button' onClick={() => handleClick('/juliana')}><ProfilePic imageProp={juliana} /></button>
          </div>
  
          <div className='face-buttons-box'>
          <button className='face-button' onClick={() => handleClick('/rachel')}><ProfilePic imageProp={rachel} /></button>
          </div>
          
          <div className='pink-dots'>
          <img style={{ width: 700, height: 75 }} src={pinkDots} alt='Pink dots line'/>
        </div>
        </div>)}
        
        <div className='text-container'>
          <div>
            <p className='header'> Pensano Developers is a team of software engineers who are available to hire for job roles in the UK.</p>
            <div className='pink-line'></div>
          </div>
          <p className='text'> Pensano is Italian for they think; and the developers at Pensano Developers do just that: they are problem solvers, they think outside the box, and they are deliberate.</p>
          <p className='text'> As graduates from Makers Academy, each is skilled at working in agile environments, test-driven development, object-oriented programming, and at quickly adapting to new tech stacks.</p>
          <p className='text'> This site is designed to showcase our work both collectively, as Pensano Devs, and our individual projects. Please take a look around.</p>
            
        <div>
          {showOurProjects && <OurProjects />}
        </div>
      </div>
    
      <div className='footer-container'>
          <div>
            <button className='footer-text' onClick={() => handleClick('/our-projects')}>Check out our projects here.</button>
          </div>
      </div>
    </div>
  );
}

export default Homepage;
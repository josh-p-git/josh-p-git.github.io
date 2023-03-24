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
        <div className='faces-buttons-container'>
          <div className='individual-container'>
            <img className='josh-photo' src={josh} onClick={() => handleClick('/josh')} />
            <p>Josh</p>
          </div>

          <div className='individual-container'>
            <img className='juliana-photo' src={juliana} onClick={() => handleClick('/juliana')} />
            <p>Juliana</p>
          </div>

          <div className='individual-container'>
            <img className='luiz-photo' src={luiz} onClick={() => handleClick('/luiz')} />
            <p>Luiz</p>
          </div>

          <div className='individual-container'>
            <img className='rachel-photo' src={rachel} onClick={() => handleClick('/rachel')} />
            <p>Rachel</p>
          </div>

          {/* <div>
            <button className='luiz-photo' onClick={() => handleClick('/luiz')}><ProfilePic imageProp={luiz} /></button>
          </div>
  
          <div>
          <img className='four-diamonds' style={{ width: 150, height: 75 }} src={fourDiamonds} alt='Four diamonds'/>
        </div>

          <div>
          <button className='juliana-photo' onClick={() => handleClick('/juliana')}><ProfilePic imageProp={juliana} /></button>
          </div>
  
          <div>
          <button className='rachel-photo' onClick={() => handleClick('/rachel')}><ProfilePic imageProp={rachel} /></button>
          </div> */}
          
          <div className='pink-dots'>
          <img style={{ width: 700, height: 75 }} src={pinkDots} alt='Pink dots line'/>
        </div>
        </div>)}
        
        <div className='text-container'>
          <p className='header'> Pensano Developers is a team of software engineers who are available to hire for job roles in the UK.</p>
          <p className='pink-line'></p>
          <p className='text'> Pensano is Italian for they think; and the developers at Pensano Developers do just that: they are problem solvers, they think outside the box, and they are deliberate.</p>
          <p className='text'> As graduates from Makers Academy, each is skilled at working in agile environments, test-driven development, object-oriented programming, and at quickly adapting to new tech stacks.</p>
          <p className='text'> This site is designed to showcase our work both collectively, as Pensano Devs, and our individual projects. Please take a look around.</p>
        </div>

      <div>
        {showOurProjects && <OurProjects />}
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
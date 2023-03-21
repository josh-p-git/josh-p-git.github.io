import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import Navbar from '../Navbar/Navbar';
import Josh from '../Josh/Josh';
import Luiz from '../Luiz/Luiz';
import Juliana from '../Juliana/Juliana';
import Rachel from '../Rachel/Rachel';
import OurProjects from '../OurProjects/OurProjects';
import ProfilePic from '../ProfilePic/ProfilePic';
import './Home.css';

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
    <div>
      <div className='navbar-container'>
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
  
          <div className='face-buttons-box'>
          <button className='face-button' onClick={() => handleClick('/juliana')}><ProfilePic imageProp={juliana} /></button>
          </div>
  
          <div className='face-buttons-box'>
          <button className='face-button' onClick={() => handleClick('/rachel')}><ProfilePic imageProp={rachel} /></button>
          </div>
        </div>)}
        
        <div className='text-container'>
          <p className='header'> Pensano Developers is a team of software engineers who are available to hire for job roles in the UK.
          </p>

          <p className='text'> Pensano is Italian for they think; and the developers at Pensano Developers do just that: they are problem solvers, they think outside the box, and they are deliberate.</p>
          <br/>
          <p className='text'> As graduates from Makers Academy, each is skilled at working in agile environments, test-driven development, object-oriented programming, and at quickly adapting to new tech stacks.</p>
          <br/>
          <p className='text'> This site is designed to showcase our work both collectively, as Pensano Devs, and our individual projects. Please take a look around.</p>
          </div>

        <div>
          {showOurProjects && <OurProjects />}
        </div>
    </div>
  );
      }

export default Homepage;
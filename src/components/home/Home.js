import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import './Home.css';
import Layout from '../layout/layout';

import OurProjects from '../OurProjects/OurProjects';
import pinkDots from '../../images/pink-dots.png'
import fourDiamonds from '../../images/four-diamonds.svg'
import makersLogo from '../../images/logo-makers.png'
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
  <Layout>
    <div className='page-container'>
      
      <div className='all-photos-container'>
        
        {showComponents && (
          <div className='team-container-one'>
            <div className='photo-josh-rachel-container'>
              <img className='josh-photo' src={josh} alt='Joshs photo' onClick={() => handleClick('/josh')} />
              <p onClick={() => handleClick('/josh')}>Josh 
                
              </p>
            </div>

          <div className='photo-josh-rachel-container'>
            <img className='rachel-photo' src={rachel} alt='Rachels photo' onClick={() => handleClick('/rachel')} />
            <p onClick={() => handleClick('/rachel')} >Rachel </p>
          </div>
        </div>)}

        {showComponents && (
          <div className='team-container-two'>
            <div className='photo-ju-luiz-container'>
              <img className='juliana-photo' src={juliana} alt='Julianas photo' onClick={() => handleClick('/juliana')} />
              <p onClick={() => handleClick('/juliana')}>Juliana</p>
            </div>

          <div className='photo-ju-luiz-container'>
            <img className='luiz-photo' src={luiz} alt='Luizs photo' onClick={() => handleClick('/luiz')} />
            <p onClick={() => handleClick('/luiz')}>Luiz</p>
          </div>
        </div>)}
      </div>  
        
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
      
      <div className='four-diamonds-container'>
        <img className='four-diamonds' src={fourDiamonds} alt='Four diamonds'/>
      
        <div className='pink-dots'>
          <img style={{ width: 800, height: 80 }} src={pinkDots} alt='Decorative line with pink dots'/>
        </div>
      </div>
      
      <div className='footer-container'>
        
          <div>
            <button className='footer-text' onClick={() => handleClick('/our-projects')}>Check out our projects here.</button>

            <div className='makers-logo-container'>
              <p>We studied at:</p>
            <a href='https://makers.tech' target="_blank">
                <img className='makers-logo' src={makersLogo} alt='Makers Academy logo'/>
            </a>
            </div>
          </div>
      </div>
    </div>
  </Layout>
  );
}

export default Homepage;
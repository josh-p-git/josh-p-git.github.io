import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Josh from "./components/Josh/Josh";
import './App.css'
import Luiz from "./components/Luiz/Luiz";
import Juliana from "./components/Juliana/Juliana";
import Rachel from "./components/Rachel/Rachel";
import OurProjects from './components/OurProjects/OurProjects';
import ProfilePic from './components/ProfilePic/ProfilePic';

import josh from './images/Josh.svg'
import luiz from './images/Luiz.svg'
import juliana from './images/Ju.svg'
import rachel from './images/Rachel.svg'


function App() {
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

  return (
    <div>
      <div className='navbar-container'>
        <Navbar handleOurProjects={handleOurProjects} toggleComponents={toggleComponents}/>
      </div>
  
      {showComponents && (
        <div className='face-buttons-container'>
          <div>
            {showJosh && <Josh handleJosh={handleJosh}/>}
            <button className='face-button' onClick={() => setShowJosh(true)}><ProfilePic imageProp={josh} /></button>
          </div>
  
          <div>
            {showLuiz && <Luiz handleLuiz={handleLuiz}/>}
            <button className='face-button' onClick={() => setShowLuiz(true)}><ProfilePic imageProp={luiz} /></button>
          </div>
  
          <div>
            {showJuliana && <Juliana handleJuliana={handleJuliana}/>}
            <button className='face-button' onClick={() => setShowJuliana(true)}><ProfilePic imageProp={juliana} /></button>
          </div>
  
          <div>
            {showRachel && <Rachel handleRachel={handleRachel}/>}
            <button className='face-button' onClick={() => setShowRachel(true)}><ProfilePic imageProp={rachel} /></button>
          </div>
        </div>)}
        
        <div>
          {showOurProjects && <OurProjects />}
        </div>
    </div>
  );
      }

export default App;

import { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Josh from '../Josh/Josh';

import Luiz from '../Luiz/Luiz';
import Juliana from '../Juliana/Juliana';
import Rachel from '../Rachel/Rachel';
import OurProjects from '../OurProjects/OurProjects';
import ProfilePic from '../ProfilePic/ProfilePic';

import josh from '../../images/Josh.svg'
import luiz from '../../images/Luiz.svg'
import juliana from '../../images/Ju.svg'
import rachel from '../../images/Rachel.svg'


function Homepage() {
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
          <div className='face-buttons-box'>
            {showJosh && <Josh handleJosh={handleJosh}/>}
            <button className='face-button' onClick={() => setShowJosh(true)}><ProfilePic imageProp={josh} /></button>
          </div>
  
          <div className='face-buttons-box'>
            {showLuiz && <Luiz handleLuiz={handleLuiz}/>}
            <button className='face-button' onClick={() => setShowLuiz(true)}><ProfilePic imageProp={luiz} /></button>
          </div>
  
          <div className='face-buttons-box'>
            {showJuliana && <Juliana handleJuliana={handleJuliana}/>}
            <button className='face-button' onClick={() => setShowJuliana(true)}><ProfilePic imageProp={juliana} /></button>
          </div>
  
          <div className='face-buttons-box'>
            {showRachel && <Rachel handleRachel={handleRachel}/>}
            <button className='face-button' onClick={() => setShowRachel(true)}><ProfilePic imageProp={rachel} /></button>
          </div>
        </div>)}
        
        <div>
          {showOurProjects && <OurProjects />}
        </div>
        <div className='text-container'>
          <h1>hello world</h1>
        </div>
    </div>
  );
      }

export default Homepage;



// import { useState } from 'react'
// import Navbar from '../Navbar/Navbar';
// import Josh from '../Josh/Josh';
// import Luiz from '../Luiz/Luiz';
// import Juliana from '../Juliana/Juliana';
// import Rachel from '../Rachel/Rachel';
// import OurProjects from '../OurProjects/OurProjects';



// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React from 'react';
// import ReactDOM from 'react-dom';

// function Homepage() {
//   const [showJosh, setShowJosh] = useState(false)
//   const [showLuiz, setShowLuiz] = useState(false)
//   const [showJuliana, setShowJuliana] = useState(false)
//   const [showRachel, setShowRachel] = useState(false)
//   const [showOurProjects, setShowOurProjects] = useState(false)
//   const [showComponents, setShowComponents] = useState(true)

//   const toggleComponents = (show) => {
//     setShowComponents(show)
//   }

//   const handleJosh = () => {
//     setShowJosh(false)
//     setShowOurProjects(false)
//   }

//   const handleLuiz= () => {
//     setShowLuiz(false)
//   }

//   const handleJuliana= () => {
//     setShowJuliana(false)
//   }

//   const handleRachel= () => {
//     setShowRachel(false)
//   }

//   const handleOurProjects= (show) => {
//     setShowOurProjects(show)
    
//   }


// return (
//   <div>
//       <div>
//         <Navbar handleOurProjects={handleOurProjects} toggleComponents={toggleComponents}/>
//       </div>
  
//       {showComponents && (
//         <div>
//           <div>
//             {showJosh && <Josh handleJosh={handleJosh}/>}
//             <button onClick={() => setShowJosh(true)}>Josh</button>
//           </div>
  
//           <div>
//             {showLuiz && <Luiz handleLuiz={handleLuiz}/>}
//             <button onClick={() => setShowLuiz(true)}>Luiz</button>
//           </div>
  
//           <div>
//             {showJuliana && <Juliana handleJuliana={handleJuliana}/>}
//             <button onClick={() => setShowJuliana(true)}>Juliana</button>
//           </div>
  
//           <div>
//             {showRachel && <Rachel handleRachel={handleRachel}/>}
//             <button onClick={() => setShowRachel(true)}>Rachel</button>
//           </div>
//         </div>)}
        
//         <div>
//           {showOurProjects && <OurProjects />}
//         </div>
//     </div>

// )};


// export default Homepage;

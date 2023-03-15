import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Josh from "./components/Josh/Josh";
import Luiz from "./components/Luiz/Luiz";
import Juliana from "./components/Juliana/Juliana";
import Rachel from "./components/Rachel/Rachel";
import OurProjects from './components/OurProjects/OurProjects';

function App() {
  const [showJosh, setShowJosh] = useState(false)
  const [showLuiz, setShowLuiz] = useState(false)
  const [showJuliana, setShowJuliana] = useState(false)
  const [showRachel, setShowRachel] = useState(false)
  const [showOurProjects, setShowOurProjects] = useState(false)

  const handleJosh= () => {
    setShowJosh(false)
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
      <div>
        <Navbar handleOurProjects={handleOurProjects}/>
      </div>
      <div>
        {showJosh && <Josh handleJosh={handleJosh}/>}
        <button onClick={() => setShowJosh(true)}>Josh</button>
      </div>

      <div>
        {showLuiz && <Luiz handleLuiz={handleLuiz}/>}
        <button onClick={() => setShowLuiz(true)}>Luiz</button>
      </div>

      <div>
        {showJuliana && <Juliana handleJuliana={handleJuliana}/>}
        <button onClick={() => setShowJuliana(true)}>Juliana</button>
      </div>

      <div>
        {showRachel && <Rachel handleRachel={handleRachel}/>}
        <button onClick={() => setShowRachel(true)}>Rachel</button>
      </div>

      <div>
        {showOurProjects && <OurProjects />}
      </div>
    </div>
   
  );
}

export default App;

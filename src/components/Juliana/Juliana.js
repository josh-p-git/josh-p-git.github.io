import React from 'react';
import { useState } from 'react';
import './Juliana.css'
import ProfilePic from '../ProfilePic/ProfilePic'
import JulianaCV from '../../images/JuImagesAndVideos/CVJuliana.pdf';
import Ju from '../../images/Ju.svg'

import Layout from '../layout/layout';
import Portfolio from './Portfolio';
import Email from '../personalInfo/Email';
import House from '../personalInfo/House';
import Linkedin from '../personalInfo/Linkedin';
import Phone from '../personalInfo/Phone';
import Git from '../personalInfo/Git';
import CV from '../CV/CV';

export default function Juliana() {
  
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [showCV, setShowCV] = useState(false)

  const handlePortfolio = () => {
    setShowPortfolio(!showPortfolio)
    setShowCV(false)
  }

  const handleCV = () => {
    setShowCV(!showCV)
    setShowPortfolio(false)
  }
  
  return (
    <Layout>
      <div className='pageContainerJu'>
        <h1 className='name'>Juliana Nocchi</h1>
          <div className='aboutContainerJu'>
            <div className='profile-pic'>
              <ProfilePic imageProp={Ju} />
            </div>

            <div>
              <p className='aboutTextJu'>
              👩🏻‍💻 I am a Makers graduate Software Engineer with a background in Animation and HR. 
              I am a positive, methodical and highly organised person who values continuous learning. I am also 
              passionate about building strong relationships and believe that collaboration, communication, 
              and respect are essential for any successful project.
              <br></br>
              <p style={{ fontSize: 14 }}>
              ⚙️ Tech Skills: C#, HTML, CSS, Ruby, JavaScript, React, React Native, NodeJS, ExpressJS, Expo Go, 
              PostgreSQL, MongoDB, Jest, Cypress, Git and GitHub
              </p>
              </p>
              </div>
              
            </div>
            
            <div className='info-containerJu'>
              <Git
                git={"https://github.com/junocchi"}
                />
                <Linkedin
                linkedin={"https://www.linkedin.com/in/juliana-nocchi/"}
                />
                <House
                location={"London"}
                />
                <Email
                email={"junocchi@gmail.com"}
                />
              </div>

              <div className='buttons-container'>
              <button className='buttons' onClick={() => {
                  handlePortfolio()
              }}>My Portfolio</button>
              
              <button className='buttons' onClick={() => {
                handleCV()
              }}>My CV</button>
            </div>
            {showPortfolio ? <Portfolio />  : null}
            {showCV ? <CV pdf={JulianaCV}/> : null}
      </div>
    </Layout>
  );
}

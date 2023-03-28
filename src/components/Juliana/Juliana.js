import React from 'react';
import { useState } from 'react';
import './Juliana.css'
import ProfilePic from '../ProfilePic/ProfilePic'
import JulianaCV from '../../images/CVJuliana.pdf';
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
      <div className='pageContainer'>
        <h1 className='name'>Juliana Nocchi</h1>
          <div className='aboutContainer'>
            <div className='profile-pic'>
              <ProfilePic imageProp={Ju} />
            </div>

            <div>
              <p className='aboutText'>
              I am a career changer junior software engineer with experience in 
              front end languages and frameworks such as HTML, CSS, JavaScript, React, 
              and React Native to create stunning user interfaces; back end technologies 
              and frameworks, including NodeJS and ExpressJS; database management 
              systems, such as PostgreSQL and MongoDB; and version control to 
              collaborate effectively with other developers on large-scale projects.
              I value continuous learning (curently working my way through C# and Phyton) 
              and I am passionate about building strong relationships.
              </p>
              </div>

              
            </div>
            
            <div className='info-container'>
              <Git
                git={"https://github.com/junocchi"}
                />
                <Linkedin
                linkedin={"https://www.linkedin.com/in/juliana-nocchi/"}
                />
                <House
                location={"London"}
                />
                <Phone
                phone={"07955599"}
                />
                <Email
                email={"ju.nocchi@gmail.com"}
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

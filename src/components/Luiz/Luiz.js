import React from 'react';
import { useState } from 'react';
import './Luiz.css'
import ProfilePic from '../ProfilePic/ProfilePic'
import luizcv from '../../images/LuizCV.pdf';
import luiz from '../../images/Luiz.svg'

import Layout from '../layout/layout';
import Portfolio from './Portfolio';
import Email from '../personalInfo/Email';
import House from '../personalInfo/House';
import Linkedin from '../personalInfo/Linkedin';
import Phone from '../personalInfo/Phone';
import Git from '../personalInfo/Git';
import CV from '../CV/CV';


export default function Luiz() {

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
        <h1 className='name'>Luiz Santos</h1>
          <div className='aboutContainer'>
            <div className='profile-pic'>
              <ProfilePic imageProp={luiz} />
            </div>

            <div>
              <p className='aboutText'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially
              </p>
              </div>

              
            </div>
            
            <div className='info-container'>
              <Git
                git={"https://github.com/santosluizfelipe"}
                />
                <Linkedin
                linkedin={"https://www.linkedin.com/in/luizfelipessantos/"}
                />
                <House className="info"
                location={"London"}
                />
                <Phone className="info"
                phone={"07940077958"}
                />
                <Email className="info"
                email={"luizfelipe0598@icloud.com"}
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
            {showCV ? <CV pdf={luizcv}/> : null}
      </div>
    </Layout>
  );
}

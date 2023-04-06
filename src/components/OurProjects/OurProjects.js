import './OurProjects.css'
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { IconContext } from 'react-icons';

import Git from '../personalInfo/Git';
import imgPensanoDevs from '../../images/OurProjectsImagesAndVideos/Pensano-Devs.png'
import imgHTMA from '../../images/OurProjectsImagesAndVideos/HTMA-report.png'

export default function OurProjects() {
  return (
    
    <IconContext.Provider
      value={{ color: '#052d49', size: '30px'}}>
      <div style={{ backgroundColor: '#E5EDEF' }}>
        <Navbar />
        <h2 className='title'>Welcome to our projects page!</h2>

      {/* Project HTMA report */}
      <div className="our-projects-container">
        <div className="gif-container">
          <img className="gif" src={imgHTMA} />
        </div>
          <div className="project-textAll">
            <h3>HTMA Report Generator</h3>
              <p>This online, login-free, program is being developed to support nutritional therapists in 
                analysing Hair Tissue Mineral Analysis results. The practitioner adds the 
                test results and the program generates a comprehensive report that can 
                downloaded. This will have a positive impact on the practitioner's daily 
                schedule, leaving them more time to focus on providing personalised 
                recommendations for the patient, such as specific dietary changes, nutrient 
                supplements, and lifestyle modifications. 
                <br></br>
                  <p style={{ fontSize: 14 }}> 
                  ⚙️ Tech used: Ruby on Rails, HTML, CSS,Git, JavaScript, SQL and RSpec. 
                  </p>
                </p>
          </div>
          <div className="github-emoticon-container">
            <div className="github-child">
            <Git  git="https://github.com/junocchi/Pensano-Devs/tree/main" />
            </div>
          </div>
          </div>

      {/* Project Pensano */}
      <div className="our-projects-container">
        <div className="gif-container">
          <img className="gif" src={imgPensanoDevs} />
        </div>
          <div className="project-textAll">
            <h3>Pensano Devs Website</h3>
              <p>Our very first project working as Pensano Devs was to developed this website to
              showcase our work both collectively, as Pensano Devs, and our individual projects.

                <br></br>
                  <p style={{ fontSize: 14 }}> 
                  ⚙️ Tech used: JavaScript, React, Jest, CSS and HTML.  
                </p>
              </p>
          </div>
          <div className="github-emoticon-container">
            <div className="github-child">
              <Git git="https://github.com/junocchi/Pensano-Devs/tree/main" />
          </div>
        </div>
      </div> 
    </div>
  </IconContext.Provider>
  );
}
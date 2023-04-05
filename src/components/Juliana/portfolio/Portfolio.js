import React from "react";
import './Portfolio.css'
import { IconContext } from 'react-icons';

import Git from '../../personalInfo/Git';
import stepvideo from '../../../images/LuizImagesAndVideos/StepFreeGig.mp4'

export default function Portfolio() {
  return (
    <IconContext.Provider
      value={{ color: '#052d49', size: '30px'}}>
      
{/* Project Solved */}
      <div className="all-projects-containerJu">
        <div className="gif-container">
          <img className="gif" src={stepvideo} />
        </div>

        <div className="project-text">
          <h3>Solved</h3>
          <p>This mobile app consists of a live-action treasure hunting with clues 
            to help the user to search for five secret London landmarks. I was 
            involved in the ideation, designing the user Interface and images, 
            prototyping the screens, implementing functionalities on the front end, 
            data manipulation, integration testing and styling.
            <br></br>
            <p style={{ fontSize: 14 }}> 
            ⚙️ Tech used: Node.js, Express, MongoDB Atlas, React Native, Expo Go 
            and Jest. API calls to 2 different services and image recognition
            </p>
          </p>
        </div>
        <div className="git-emoticon-container">
          <div className="git-child">
          <Git  git="https://github.com/junocchi/Solved-App" />
          </div>
        </div>
      </div>

{/* Project Acebook */}
      <div className="all-projects-containerJu">
        <div className="gif-container">
          <img className="gif" src={stepvideo} />
        </div>
        <div className="project-text">
        <h3>Acebook Air</h3>
          <p>In this project, eight of us were tasked with working on an existing MERN 
            application with only the most basic signup, login and logout functions in place 
            and minimal other functionality. The challenge was to familiarise ourselves with an 
            unknown codebase with technologies we'd little to no previous experience in. We had 
            to improve and extend it into a fully functioning app that we could present to the stakeholders.
            You can view the fully deployed site here: Acebook-Air
            <br></br>
            <p style={{ fontSize: 14 }}> 
            ⚙️ Tech used: MERN - MongoDB, Express, React and Node
            </p>
          </p>
        </div>
        <div className="git-emoticon-container">
          <div className="git-child">
            <Git  git="https://github.com/junocchi/Acebook-Air" />
          </div>
        </div>
      </div>

{/* Project Makers B&B */}
      <div className="all-projects-containerJu">
        <div className="gif-container">
          <img className="gif" src={stepvideo} />
        </div>
          <div className="project-text">
          <h3>Makers-BnB</h3>
            <p>As an Airbnb clone, with Cloud BnB you can register, login, list your 
              properties for rent, browse the listed properties, view the availability 
              of properties, and submit booking requests.
            <br></br>
              <p style={{ fontSize: 14 }}> 
              ⚙️ Tech used: Ruby, Active Record, Sinatra and RSpec 
              </p>
            </p>
          </div>
          <div className="git-emoticon-container">
            <div className="git-child">
            <Git  git="https://github.com/junocchi/Makers-BnB" />
            </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

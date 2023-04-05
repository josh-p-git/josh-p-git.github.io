import React from "react";
import './Portfolio.css'
import { IconContext } from 'react-icons';

import Git from '../../personalInfo/Git';
import stepvideo from '../../../images/LuizImagesAndVideos/StepFreeGig.mp4'

export default function Portfolio() {
  return (
    <IconContext.Provider
      value={{ color: 'white', size: '30px'}}>
      <div className="project-container">
          <div className="gif-container">
            <img className="gif" src={stepvideo} />
          </div>

        <div className="project-text">
          <h3>Step Free Gigs</h3>
          <p>A mobile app for finding wheelchair accessible gigs in London with step-free navigation
            <br/> Tech used: React Native, Expo, Node.js, Express.js, Jest </p>
        </div>
        <div className="git-emoticon-container">
          <div className="git-child">
          <Git  git="https://github.com/santosluizfelipe/StepFreeGigs" />
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="gif-container">
          <img className="gif" src={stepvideo} />
        </div>

        <div className="project-text">
        <h3>Acebook</h3>
          <p>A mobile app for finding wheelchair accessible gigs in London with step-free navigation
            <br/> Tech used: React Native, Expo, Node.js, Express.js, Jest </p>
        </div>
        <div className="git-emoticon-container">
          <div className="git-child">
            <Git  git="https://github.com/santosluizfelipe/StepFreeGigs" />
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="gif-container">
          <img className="gif" src={stepvideo} />
        </div>
          <div className="project-text">
          <h3>Makers-BnB</h3>
            <p>A mobile app for finding wheelchair accessible gigs in London with step-free navigation
              <br/> Tech used: React Native, Expo, Node.js, Express.js, Jest </p>
          </div>
          <div className="git-emoticon-container">
            <div className="git-child">
            <Git  git="https://github.com/santosluizfelipe/StepFreeGigs" />
            </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}


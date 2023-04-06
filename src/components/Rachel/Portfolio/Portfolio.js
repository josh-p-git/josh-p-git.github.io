import React from "react";
import './Portfolio.css'
import { IconContext } from 'react-icons';

import Git from '../../personalInfo/Git';

import gifSolved from '../../../images/JuImagesAndVideos/gif-Solved.gif'
import Bowling from '../../../images/JuImagesAndVideos/bowling.png'
import bank from '../../../images/JuImagesAndVideos/bank.png'
import CloudBnB from '../../../images/JuImagesAndVideos/CloudBnB.png'
import AcebookAir from '../../../images/JuImagesAndVideos/gif-AcebookAir.gif'

export default function Portfolio() {
  return (
    <IconContext.Provider
      value={{ color: '#052d49', size: '30px'}}>
  
{/* Project Makers BnB */}
      <div className="all-projects-containerRach">
        <div className="gif-container">
          <img className="gif" src={CloudBnB} />
        </div>
          <div className="project-text">
          <h3>Cloud BnB</h3>
            <p>As an Airbnb clone, the six of us develop Cloud BnB is a week.
              Users can register, login, list their properties for rent, browse the listed properties, view the availability 
              of properties, and submit booking requests.
            <br></br>
              <p style={{ fontSize: 14 }}> 
              ⚙️ Tech used: Ruby, Active Record, Sinatra and RSpec 
              </p>
            </p>
          </div>
          <div className="github-emoticon-container">
            <div className="github-child">
              <Git  git="https://github.com/junocchi/Cloud-BnB" />
            </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
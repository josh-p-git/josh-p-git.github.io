import React from "react";
import './Portfolio.css'
import { IconContext } from 'react-icons';

import Git from '../personalInfo/Git';

export default function Portfolio({ gif, content, link }) {
  return (
    <IconContext.Provider
      value={{ color: 'white', size: '30px'}}
    >
      <div className="project-container">
        {gif && (
          <div className="gif-container">
            <img className="gif" src={gif} />
          </div>
        )}
        <div className="project-text">
          <p>{content}</p>
        </div>
        <div className="git-emoticon-container">
          <div className="git-child">
          <Git  git={link} />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

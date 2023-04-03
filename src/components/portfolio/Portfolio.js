import React from "react";
import './Portfolio.css'
import stepgif from '../../images/stepfreegigs.gif'
import Git from '../personalInfo/Git';

export default function Portfolio({ gif, content, link }) {
  return (
    <div className="project-container">
        <div className="gif-container">
          <img className="gif" src={stepgif} />
        </div>
      <div className="project-text">
        <p>A mobile app for finding wheelchair accessible gigs in London with step-free navigation
          <br/>Tech used:
          React Native, Expo, Node.js, Express.js, Jest
        </p>
          <div className="git-emoticon">
            <Git
            git={"https://github.com/santosluizfelipe/StepFreeGigs"}
          />
          </div>
      </div>
    </div>
  );
}

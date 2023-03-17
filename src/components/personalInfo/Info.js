import React from "react";
import './Info.css'
import { GoMarkGithub } from 'react-icons/go';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';




export default function Info({ git, linkedin, location, email, phone}) {
    return (
      <div className="info">
          <a className="link" target="_blank" rel="noopener noreferrer" href={git}><GoMarkGithub /></a><GoPrimitiveDot />   
          <a className="link" target="_blank" rel="noopener noreferrer" href={linkedin}><AiFillLinkedin /></a><GoPrimitiveDot />
          <BsFillHouseDoorFill/> {location}<GoPrimitiveDot />
          <MdEmail /> {email}<GoPrimitiveDot />
          <AiFillPhone /> {phone} 
        </div>
    );
  }
  
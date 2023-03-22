import React from "react";
import './Info.css'
import { BsFillHouseDoorFill } from 'react-icons/bs';





export default function House({ location}) {
    return (
      <div className="info">
          <BsFillHouseDoorFill/> {location}
      </div>
    );
  }
  
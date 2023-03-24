import '../profile-styling/profileStyling.css';
import ProfilePic from '../ProfilePic/ProfilePic'
import Ju from '../../images/Ju.svg'

import Email from '../personalInfo/Email';
import House from '../personalInfo/House';
import Linkedin from '../personalInfo/Linkedin';
import Phone from '../personalInfo/Phone';
import Git from '../personalInfo/Git';

export default function Juliana({ handlePortfolio, handleCV, toggleComponents }) {
  return (

    <div className='pageContainer'>
      <h1 className='name'>Juliana Nocchi</h1>
        <div className='aboutContainer'>
          <div className='profile-pic'>
            <ProfilePic imageProp={Ju} />
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
                handlePortfolio(true)
                toggleComponents(false)
            }}>My Portfolio</button>
            
            <button className='buttons' onClick={() => {
                handleCV(true)
                toggleComponents(false)
            }}>My CV</button>
          </div>
    </div>
  );
}

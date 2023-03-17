import './Rachel.css'
import ProfilePic from '../ProfilePic/ProfilePic'
import rachel from '../../images/Rachel.svg'


export default function Rachel({ handleRachel }) {
    return (
        <div className="rachel-backdrop">
            <div className="rachel-title">
                <h1>Rachel</h1>
                <div className='aboutText'>
                    <div className='profile-pic'>
                        <ProfilePic imageProp={rachel} />
                    </div>
                <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially. <br/>
                <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially. <br/>
                <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially.
                </p>
                </div>
            </div>
            <button onClick={handleRachel} >Close</button>
        </div>
        )
}
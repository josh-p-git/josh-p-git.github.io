import './Rachel.css'

export default function Rachel({ handleRachel }) {
    return (
        <div className="rachel-backdrop">
            <div className="rachel-title">
                <h1>Rachel</h1>
                <p>Please give rachel a job</p>
            </div>
            <button onClick={handleRachel} >Close</button>
        </div>
        )
}
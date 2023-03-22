import './Juliana.css'

export default function Juliana({ handleJuliana }) {
    return (
        <div className="juliana-backdrop">
            <div className="juliana-title">
                <h1>Juliana</h1>
                <p>Please give ju a job</p>
            </div>
            <button onClick={handleJuliana} >Close</button>
        </div>
        )
}
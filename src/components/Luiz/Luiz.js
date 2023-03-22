import './Luiz.css'

export default function Luiz({ handleLuiz }) {
    return (
        <div className="luiz-backdrop">
            <div className="luiz-title">
                <h1>Luiz</h1>
                <p>Please give luiz a job</p>
            </div>
            <button onClick={handleLuiz} >Close</button>
        </div>
        )
}
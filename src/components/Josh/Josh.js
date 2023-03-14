import './Josh.css'

export default function Josh({ handleJosh }) {
    return (
        <div className="josh-backdrop">
            <div className="josh-title">
                <h1>Josh</h1>
                <p>Please give josh a job</p>
            </div>
            <button onClick={handleJosh} >Close</button>
        </div>
        )
}
import './Rachel.css'
import Layout from '../layout/layout'

export default function Rachel({ handleRachel }) {
    return (
        <Layout>
            <div className="rachel-backdrop">
                <div className="rachel-title">
                    <h1>Rachel</h1>
                    <p>Please give rachel a job</p>
                </div>
                <button onClick={handleRachel} >Close</button>
            </div>
        </Layout>
        )
}
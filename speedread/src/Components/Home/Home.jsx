import Content from "../Content/Content"
import "./Home.css"

export default function Home (props) {
    return (
        <div>
            <div className="app-title-container">
                <div className="app-background"></div>
                <div className="app-title-text">
                    <h1 className="app-title">Speed Read</h1>
                    <p className="app-info">A Revolutionized Way to Read</p>
                </div>
            </div>
            <div className="content-container">
                {props.reads.map((read) => (
                    <Content key={read.id} read={read}/>
                ))}
            </div>
        </div>
    )
}
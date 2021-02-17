import Content from "../Content/Content"
import "./Home.css"

export default function Home (props) {
    return (
        <div className="home-container">
            <div className="app-title-container">
                <header className="app-title">Speed Read</header>
            </div>
            <div className="content-container">
                {props.reads.map((read) => (
                    <Content key={read.id} read={read}/>
                ))}
            </div>
        </div>
    )
}
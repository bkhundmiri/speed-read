import "./Home.css"
import { Link } from "react-router-dom"

export default function Home (props) {
    return (
        <div>
            <div className="app-title-container">
                <div className="app-background"></div>
                <div className="app-title-text">
                    <h1 className="app-title">Speed Read</h1>
                    <div className="info-wrapper">
                        <p className="app-info">A Revolutionized Way to Read</p>
                    </div>
                    <Link to="/showall">
                        {/* BOOK ANIMATION COURTESY OF https://freefrontend.com/css-book-effects/ & https://codepen.io/wwwebneko/pen/XjOZZK */}
                        <div className="book">
                            <span className="page turn"></span>
                            <span className="page turn"></span>
                            <span className="page turn"></span>
                            <span className="page turn"></span>
                            <span className="page turn"></span>
                            <span className="page turn"></span>
                            <span className="cover"></span>
                            <span className="page"></span>
                            <span className="cover turn"></span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
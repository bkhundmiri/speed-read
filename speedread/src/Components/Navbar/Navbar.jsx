import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {

    const ranID = () => {
        let max = props.reads.length;
        let min = 0;
        let i = Math.floor(Math.random() * (max - min)) + min;
        if (props.reads[i]) {
        return props.reads[i].id;
        }
    };
    
    return (
        <nav>
        <div className="home">
            <Link to="/">Home</Link>
        </div>
        <div className="pages">
            <Link to="/new">Add</Link>
            <Link to={`/read/random/${ranID()}`}>Read</Link>
        </div>
        </nav>
    );
}

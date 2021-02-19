import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar(props) {
    const [togglePanel, setTogglePanel] = useState(false)

    function openPanel () {
        setTogglePanel((curr) => !curr)
    }

    function getNewRanID () {
        props.setToggleRan((curr) => !curr)
    }

    return (
        <nav>
            <button className="openbtn" onClick={openPanel}>☰</button>
            <div className="pages" style={{ width: (togglePanel) ? "250px" : "0px" }}>
                <Link to="/">Home</Link>
                <Link to="/showall">All Books</Link>
                <Link to="/new">Add a New Book</Link>
                <Link to={`/readrandom/${props.ranID}`} onClick={getNewRanID}>Read Something Random!</Link>
            </div>
        </nav>
    );
}

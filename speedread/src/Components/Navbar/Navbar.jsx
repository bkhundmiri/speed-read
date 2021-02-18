import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar(props) {
    const [ranID, setRanID] = useState("")
    const [toggleRan, setToggleRan] = useState(false)
    const [togglePanel, setTogglePanel] = useState(false)
    const history = useHistory()

    useEffect(() => {
        const getRanID = () => {
            let max = props.reads.length;
            let min = 0;
            let i = Math.floor(Math.random() * (max - min)) + min;
            if (props.reads[i]) {
            setRanID(props.reads[i].id)
            }
        };
        getRanID()
    },[toggleRan] )

    function getNewRanID () {
        setToggleRan((curr) => !curr)
    }

    function openPanel () {
        setTogglePanel((curr) => !curr)
    }

    return (
        <nav>
            <button className="openbtn" onClick={openPanel}>☰</button>
            <div className="pages" style={{ width: (togglePanel) ? "250px" : "0px" }}>
                <Link to="/">Home</Link>
                <Link to="/new">Add</Link>
                <Link to={`/read/random/${ranID}`} onClick={getNewRanID}>Read</Link>
            </div>
        </nav>
    );
}

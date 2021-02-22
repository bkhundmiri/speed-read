import { useEffect, useState } from "react";
import "./Word.css"

export default function Word (props) {
    const [word, setWord] = useState(" ")
    const [triggerWord, setTriggerWord] = useState(false)
    const [toggleDark, setToggleDark] = useState(false)
    const [speed, setSpeed]  = useState(300)
    const [inputSpeed, setInputSpeed] = useState(0)
    
    function displayWord () {
        setWord(props.wordArr.shift())
    }

    useEffect(() => {
        if (!triggerWord || props.wordArr.length === 0) {
            return
        } else {
            setTimeout(displayWord, speed)
        }

    },[triggerWord, word])
    
    function play () {
        setTriggerWord((curr) => !curr)
    } 

    function setDarkMode () {
        setToggleDark((curr) => !curr)
    }

    function speed200 () {
        setSpeed(300)
    }

    function speed400 () {
        setSpeed(150)
    }

    function speed600 () {
        setSpeed(100)
    }

    function setCustomSpeed () {
        setSpeed(60000/inputSpeed)
    }

    return (
        <div>
            <div className="word-box" onClick={play}>
                <div className={`${!toggleDark ? 'light' : 'dark'} word`} >
                    <h5 className="play-message" style={{display: (triggerWord) ? "none" : "" , fontSize: "25px"}}>{triggerWord ? "" : "Click Here to Play"}</h5>
                    <h2 style={{display: (triggerWord) ? "" : "none"}}>{word}</h2>
                </div>
            </div>
            <button className="readrandom-darkmode-button" onClick={setDarkMode}>{toggleDark ? 'Light Mode' : 'Dark Mode'}</button>
            <div className="speed-buttons-wrapper">
                <button className="speedbutton" onClick={speed200}>200 wpm</button>
                <button className="speedbutton" onClick={speed400}>400 wpm</button>
                <button className="speedbutton" onClick={speed600}>600 wpm</button>
                <br/>
                <input type="number" placeholder="Custom value" value={inputSpeed} onChange={(e) => setInputSpeed(e.target.value)}/>
                <button onClick={setCustomSpeed}>Set WPM</button>
            </div>
            <input className="speed-range" type="range" min="0" max="950" step="10" value={speed} onChange={(e) => setSpeed(e.target.valueAsNumber)}/>
        </div>
    )
} 
import { useEffect, useState } from "react";
import "./Word.css"

export default function Word (props) {
    const [word, setWord] = useState(" ")
    const [triggerWord, setTriggerWord] = useState(false)
    const [toggleDark, setToggleDark] = useState(false)
    const [speed, setSpeed]  = useState(500)
    
    function displayWord () {
        setWord(props.wordArr.shift())
    }

    useEffect(() => {
        if (!triggerWord || props.wordArr.length === 0) {
            return
        } else {
            setTimeout(displayWord, 1000 - speed)
        }

    },[triggerWord, word])
    
    function play () {
        setTriggerWord((curr) => !curr)
    } 

    function setDarkMode () {
        setToggleDark((curr) => !curr)
    }

    return (
        <div>
            <button className="readrandom-darkmode-button" onClick={setDarkMode}>{toggleDark ? 'Light Mode' : 'Dark Mode'}</button>
            <div className="word-box" onClick={play}>
                <div className={`${!toggleDark ? 'light' : 'dark'} word`} >
                    <h5 className="play-message" style={{display: (triggerWord) ? "none" : "" , fontSize: "25px"}}>{triggerWord ? "" : "Click Here to Play"}</h5>
                    <h2 style={{display: (triggerWord) ? "" : "none"}}>{word}</h2>
                </div>
            </div>
            <input type="range" min="150" max="900" step="25" value={speed} onChange={(e) => setSpeed(e.target.valueAsNumber)}/>
        </div>
    )
} 
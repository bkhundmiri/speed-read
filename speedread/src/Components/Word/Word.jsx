import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./Word.css"

export default function Word (props) {
    const [word, setWord] = useState(" ")
    const [triggerWord, setTriggerWord] = useState(false)
    const [speed, setSpeed]  = useState(500)
    const params = useParams()
    
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

    return (
        <div>
            <div className="word-box"> 
                <div className="word" onTouchStart={play} onClick={play}>
                    <h5 style={{display: (triggerWord) ? "none" : "" , fontSize: "25px"}}>{triggerWord ? "" : "Click Here to Play"}</h5>
                    <h2 style={{display: (triggerWord) ? "" : "none"}}>{word}</h2>
                </div>
            </div>
            <input type="range" min="150" max="900" step="25" value={speed} onChange={(e) => setSpeed(e.target.valueAsNumber)}/>
        </div>
    )
} 
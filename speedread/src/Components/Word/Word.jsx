import { useState } from "react";

export default function Word (props) {
    const [word, setWord] = useState("")


    console.log(props.wordArr);
    if (props.wordArr.length > 0) {
        const displayWords = setInterval(() => {
            let word = props.wordArr.shift()
            console.log(word);
            // setWord(word)
        }, 2000);
    } 
    return (
        <div>
            <div>You're Done</div>
            <div>
                    <div>{word}</div>
                    <button>Stop</button>
            </div>
        </div>
    )
} 
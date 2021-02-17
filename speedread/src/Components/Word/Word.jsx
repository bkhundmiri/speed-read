import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Word (props) {
    const [word, setWord] = useState("")
    const [triggerWord, setTriggerWord] = useState(false)
    const params = useParams()

    useEffect(() => {
        let interval1
        if (props.wordArr.length > 0) {
            interval1 = setInterval(displayWord, 1000)
            return interval1
        } else {
            stopInterval1()
        }

        function displayWord () {
            setWord(props.wordArr.shift())
            console.log(props.wordArr.shift());
        }

        function stopInterval1 () {
            clearInterval(interval1)
        }

    },[triggerWord])
    
    return (
        <div> Loading </div>
    )
    // console.log(props.wordArr);
    // if (props.wordArr.length > 0 && params.id) {
    //     const displayWords = setInterval(() => {
    //         setWord(props.wordArr.shift())
    //         console.log(word);
    //     }, 2000);
    //     return (
    //         <div>
    //             <div>Read Here: </div>
    //             <div>
    //                     <div>{word}</div>
    //                     <button onClick={clearInterval()}>Stop</button>
    //             </div>
    //         </div>
    //     )
    // } else {
    //     return <div>Loading...</div>
    // }
} 
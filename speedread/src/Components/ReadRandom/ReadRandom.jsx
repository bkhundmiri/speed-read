import { useState } from "react";
import { useParams } from "react-router-dom";
import Word from "../Word/Word"

export default function Read (props) {
    const params = useParams();
    const [toggleDark, setToggleDark] = useState(false)

    let foundRandomRead = props.reads.find((read) => read.id === params.id);

    if (!foundRandomRead) {
        return <h4>wtf Loading....</h4>;
    }

    const wordArr = foundRandomRead.fields.content.split(" ")
    console.log(wordArr)

    function setDarkMode () {
        setToggleDark((curr) => !curr)
    }

    return (
        <div>
            <div className="">
                <h1>Random Read</h1>
                <h2>{foundRandomRead.fields.title}</h2>
                <p>{foundRandomRead.fields.author}</p>
            </div>
            <button className="readrandom-darkmode-button" onClick={setDarkMode}>{toggleDark ? 'Light Mode' : 'Dark Mode'}</button>
            <div className={`${toggleDark ? 'light' : 'dark'} word-bank`}>
                <Word wordArr={wordArr}/>
            </div>
        </div>
    );
}
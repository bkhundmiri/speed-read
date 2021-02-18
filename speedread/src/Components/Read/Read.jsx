import { useParams } from "react-router-dom";
import Word from "../Word/Word"
import "./Read.css"

export default function Read (props) {
    const params = useParams();

    let foundRead = props.reads.find((read) => read.id === params.id);

    if (!foundRead) {
        return <h4>Loading....</h4>;
    }

    const wordArr = foundRead.fields.content.split(" ")
    console.log(wordArr)

    return (
        <div>
            <div>
                <h1>Reading {foundRead.fields.title}</h1>
                <p>{foundRead.fields.author}</p>
            </div>
            <div className="word-bank">
                <Word wordArr={wordArr}/>
            </div>
        </div>
    );
}

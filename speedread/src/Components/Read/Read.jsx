import { useParams } from "react-router-dom";
import Word from "../Word/Word"

export default function Read (props) {
    const params = useParams();

    let foundRead = props.reads.find((read) => read.id === params.id);

    if (!foundRead) {
        return <h4>wtf Loading....</h4>;
    }

    const wordArr = foundRead.fields.content.split(" ")
    console.log(wordArr)

    return (
        <div>
            <div>
                <h2>{foundRead.fields.title}</h2>
                <p>{foundRead.fields.author}</p>
            </div>
            <div className="word-bank">
                <Word wordArr={wordArr}/>
            </div>
        </div>
    );
}

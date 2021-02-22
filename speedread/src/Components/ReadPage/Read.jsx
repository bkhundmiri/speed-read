import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Word from "../Word/Word"
import "./Read.css"

export default function Read (props) {
    const params = useParams();
    const [ranReadID, setRanReadID] = useState("")
    let foundRead = props.reads.find((read) => read.id === params.id);
    const wordArr = (foundRead) ? foundRead.fields.content.split(" ") : " "

    useEffect(() => {
        const getRanReadID = () => {
            let max = props.reads.length;
            let min = 0;
            let i = Math.floor(Math.random() * (max - min)) + min;
            if (props.reads[i]) {
            setRanReadID(props.reads[i].id)
            }
        };
        getRanReadID()
    }, [])


    if (!foundRead) {
        return <h4>Loading....</h4>;
    } else return (
        <div className="readpage-container">
            <div className="read-title-author">
                <h1>{foundRead.fields.title}</h1>
                <p>By: {foundRead.fields.author}</p>
            </div>
            <div className="word-bank">
                <Word wordArr={wordArr}/>
            </div>
        </div>
    );
}

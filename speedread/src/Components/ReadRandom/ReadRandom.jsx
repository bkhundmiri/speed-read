import { useState } from "react";
import { useParams } from "react-router-dom";
import Word from "../Word/Word"
import "./ReadRandom.css"

export default function Read (props) {
    const params = useParams();

    let foundRandomRead = props.reads.find((read) => read.id === params.id);

    if (!foundRandomRead) {
        return <h4>wtf Loading....</h4>;
    }

    const wordArr = foundRandomRead.fields.content.split(" ")
    console.log(wordArr)

    return (
        <div className="random-read-container">
            <div className="">
                <h1>Random Read</h1>
                <h2>{foundRandomRead.fields.title}</h2>
                <p>{foundRandomRead.fields.author}</p>
            </div>
            <div className="word-bank">
                <Word wordArr={wordArr}/>
            </div>
        </div>
    );
}
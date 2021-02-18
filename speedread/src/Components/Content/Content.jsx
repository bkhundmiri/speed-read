import { Link, useParams } from "react-router-dom"
import "./Content.css"

export default function Content (props) {
    const params = useParams()
    return (
        <div className="read-container">
            <div className="top-wrapper">
                <div className="title-author-wrapper">
                    <p className="title">{props.read.fields.title}</p>
                    <p className="author">{props.read.fields.author}</p>
                </div>
                <div className="buttons-wrapper">
                    <Link to={`/read/${props.read.id}`}><button className="readmore-button">Read More</button></Link>
                    <Link to={`/edit/${props.read.id}`}><button className="edit-button">Edit</button></Link>
                </div>
            </div>

            <div className="paragraph-wrapper">
                <p className="paragraph">{props.read.fields.content}</p>
            </div>
        </div>
    )
}
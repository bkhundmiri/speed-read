import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { baseURL, config } from "../../Services"

export default function Form (props) {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [pages, setPages] = useState("")
    const [content, setContent] = useState("")
    const params = useParams()
    const history = useHistory()

    useEffect(() => {
        if (props.reads.length > 0 && params.id) {
            const matchReads = props.reads.find((read) => params.id === read.id)
            if (matchReads) {
                setTitle(matchReads.fields.title)
                setAuthor(matchReads.fields.author)
                setPages(matchReads.fields.pages)
                setContent(matchReads.fields.content)
            }
        }
    }, [props.reads, params.id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const fields = {
            title,
            author,
            pages,
            content,
        }
        if (params.id) {
            const putURL = `${baseURL}/${params.id}`
            await axios.put(putURL, { fields }, config)
        } else {
            await axios.post(baseURL, { fields }, config)
        }
        props.setToggleFetch((curr) => !curr)
        history.push("/")
    }


    return (
        <div>
            <h2>Add a New Excerpt</h2>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br/>
                <label>Author: </label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <br/>
                <label>Pages: </label>
                <input type="text" value={pages} onChange={(e) => setPages(e.target.value)} />
                <br/>
                <label>Content: </label>
                <textarea title="content" id="content-textarea" cols="30" rows="10" value={content} onChange={(e) => setContent(e.target.value)} ></textarea>
                <br/>
                <button type="submit">Add Reading</button>
            </form>
        </div>
    )
}
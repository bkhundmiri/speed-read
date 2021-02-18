import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../../Services";
import "./Form.css";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [content, setContent] = useState("");
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (props.reads.length > 0 && params.id) {
      const matchReads = props.reads.find((read) => params.id === read.id);
      if (matchReads) {
        setTitle(matchReads.fields.title);
        setAuthor(matchReads.fields.author);
        setPages(matchReads.fields.pages);
        setContent(matchReads.fields.content);
      }
    }
  }, [props.reads, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      author,
      pages,
      content,
    };
    if (params.id) {
      const putURL = `${baseURL}/${params.id}`;
      await axios.put(putURL, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
    }
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };

  return (
    <div>
      <h2>Add a New Excerpt</h2>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="input input-title">
          <label for="title">Title: </label>
          <input
            id="title"
            type="text"
            placeholder="Title of book..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input input-author">
          <label>Author: </label>
          <input
            type="text"
            placeholder="Author of book..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="input input-pages">
          <label>Pages: </label>
          <input
            type="text"
            placeholder="How many pages..."
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </div>
        <div className="input input-content">
          <label>Content: </label>
          <textarea
            placeholder="Excerpt you would like to read..."
            title="content"
            id="content-textarea"
            cols="20"
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="add-button">
          <button type="submit">Add Reading</button>
        </div>
      </form>
    </div>
  );
}

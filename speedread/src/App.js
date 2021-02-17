import { useEffect, useState } from 'react';
import { Route, Link } from "react-router-dom"
import { baseURL, config } from "./Services/index"
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Form from "./Components/Form/Form"
import Read from "./Components/Read/Read"
import axios from 'axios';

function App() {
  const [reads, setReads] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const getReads = async () => {
      const res = await axios.get(baseURL, config)
      console.log(res.data.records);
      setReads(res.data.records)
    }
    getReads()
  }, [toggleFetch])

  return (
    <div className="App">
      <Navbar reads={reads}/>
      <Route exact path="/">
        <Home reads={reads}/>
      </Route>
      <Route path="/new">
        <Form reads={reads} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route exact path="/read/random/:id">
        <Read reads={reads} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route exact path="/read/:id">
        <Read reads={reads} setToggleFetch={setToggleFetch}/>      
      </Route>
      <Route path="/edit/:id">
        <Form reads={reads} setToggleFetch={setToggleFetch}/>
      </Route>

    </div>
  );
}

export default App;

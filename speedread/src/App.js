import { useEffect, useState } from 'react';
import { Route } from "react-router-dom"
import { baseURL, config } from "./Services/index"
import './App.css';
import 'normalize.css'
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/HomePage/Home"
import Show from "./Components/ShowPage/Show"
import Form from "./Components/FormPage/Form"
import Read from "./Components/ReadPage/Read"
import Footer from "./Components/Footer/Footer"
import axios from 'axios';

function App() {
  const [reads, setReads] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  const [toggleRan, setToggleRan] = useState(false)
  const [ranID, setRanID] = useState("")


  useEffect(() => {
    const getReads = async () => {
      const res = await axios.get(`${baseURL}`, config)
      console.log(res.data.records);
      setReads(res.data.records)
    }
    getReads()
  }, [toggleFetch])

  useEffect(() => {
    const getRanID = () => {
        let max = reads.length;
        let min = 0;
        let i = Math.floor(Math.random() * (max - min)) + min;
        if (reads[i]) {
        setRanID(reads[i].id)
        }
    };
    getRanID()
},[toggleRan] )

  return (
    <div className="App">
      
      <Navbar ranID={ranID} reads={reads} setToggleRan={setToggleRan}/>

      <Route exact path="/">
        <Home reads={reads}/>
      </Route>

      <Route exact path="/showall">
        <Show reads={reads} setToggleFetch={setToggleFetch}/>
      </Route>

      <Route path="/new">
        <Form reads={reads} setToggleFetch={setToggleFetch}/>
      </Route>

      <Route exact path="/readrandom/:id">
        <Read reads={reads} ranID={ranID} setToggleFetch={setToggleFetch}/>
      </Route>

      <Route exact path="/read/:id">
        <Read reads={reads} setToggleFetch={setToggleFetch}/>      
      </Route>

      <Route path="/edit/:id">
        <Form reads={reads} setToggleFetch={setToggleFetch}/>
      </Route>

      <Footer />

    </div>
  );
}

export default App;

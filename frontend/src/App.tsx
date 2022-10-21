import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";



function App() {


  const [helloMessage, setHelloMessage] = useState("");

  useEffect(() => {
    fetchHelloMessage()
  }, [])

  function fetchHelloMessage() {
    axios.get("/api/hello")
        .then(response => response.data)
        .then(data => setHelloMessage(data))
        .then((error) => console.log(error))
  }



  return (
    <div className="App">
          <p>{helloMessage}</p>
    </div>
  );
}

export default App;

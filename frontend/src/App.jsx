import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:4040/api/message")
    .then((res) => res.json())
    .then((demo) => setMessage(demo.message))
  }, []);



  return (
  <>
    <h1>fronted demo</h1>
    <h2>
      this is message {message}
    </h2>
  </>
  )
}

export default App

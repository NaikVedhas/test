import { useState } from 'react'
import './App.css'

function App() {

  const [messageList,setMessageList] = useState([]);
  const [message,setMessage] = useState("");

  const handleClick = () =>{
    
    setMessage("");
  }
  return (
    <>
    <div>
      <input 
      type="text"
      value={message}
      onChange={(e)=>setMessage(e.target.value)}
      placeholder='Type your message'
      />
      <button onClick={handleClick}>Send Message</button>

      <h1>All messageList</h1>
      {messageList.length>0 ? (
        <div>
          {messageList.map((m,id) => (
            <div key={id}>
              {m}
            </div>
          ))}
        </div>
      ):(
        <h3> No messageList present at the moment</h3>
      )}
    </div>
    </>
  )
}

export default App

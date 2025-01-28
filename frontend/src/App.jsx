import { useEffect, useState } from 'react'
import './App.css'
import io from "socket.io-client"; // Import Socket.IO client library.

function App() {

  const [messageList,setMessageList] = useState([]);
  const [message,setMessage] = useState("");


  const socket = io.connect("http://localhost:5000"); // Connect to the server.
  const handleClick = () =>{
    socket.emit("sendMessage",{message});
    setMessage("");
  }

  useEffect(()=>{
    socket.on("receiveMessage", (data) => {
      setMessageList((prev) => [...prev, data.message]); // Add the received message to the list.
  });
  },[]);
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
        <h3> No messages present at the moment</h3>
      )}
    </div>
    </>
  )
}

export default App

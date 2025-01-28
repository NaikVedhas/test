const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);       //This is different

//Now the socket io connections: 

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Allow frontend running on this URL to connect.
        methods: ["GET", "POST"], // HTTP methods allowed.
    },
});

//on  is used for catching event and emit for sending one (both in frontend and backend).The names should be same 


io.on("connection",(socket)=>{           //when the user connects

    console.log(`User connected: ${socket.id}`);
    
    //Now listen to diffrrent request

    socket.on("sendMessage",(data)=>{
        console.log(data);
        io.emit("receiveMessage", data); // Broadcast the message to all connected clients.
    });

    socket.on("disconnect",()=>{
        console.log("Usser Disconnected");
    })
});

//connection and disconnect are by default from socket.io


server.listen(5000,()=> console.log("Connected to port and running")); //instead of app we need to do server.listen
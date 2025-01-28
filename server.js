const express = require('express');
const http = require('http');
const path = require('path');


const app = express();



const server = http.createServer(app);   //this we have to do different 



app.use(express.static(path.resolve("./public")));

app.get('/',(req,res)=>{
    return res.sendFile("/public/index.html");
});


server.listen(3000,()=> console.log("Server started "));

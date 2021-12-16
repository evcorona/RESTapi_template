//Export Tools
const cors = require("cors");
const express = require("express");

//Export Routes

//Server Config
const server = express();

server.use(cors());
server.use(express.json()); //Middleware

//Routes


//Server Response 
server.get("/", (request, response) => {
  response.json({
    success: true,
    message: "myAPI.vxcrown",
  });
});

module.exports = server;

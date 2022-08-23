import express from "express";

const app = express();

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

function init(app){
    const server = http.createServer(app);
    const io = new Server(server);

    //oprette connection - et hul i mellem frontend og backend 
  io.on("connection", (socket) => {
    let test = socket.handshake.auth.message

    socket.on("change", (data) => {
      socket.emit("update", data)
      socket.broadcast.emit("update", data)
    });
  });

    return server;
}

export default init;
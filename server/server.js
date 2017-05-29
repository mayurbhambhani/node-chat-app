const config = require("./config/config.js")

const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");


let app = express();
let public_folder = path.join(__dirname, "../", "public");
app.use(express.static(public_folder));

let server = http.createServer(app);
let io = socketIO(server);

io.on("connection", (socket) => {

    console.log("new user connected..");

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('createMessage', function (email) {
        console.log("email create request", email);
        email.createdAt = new Date().getTime();
        io.emit('newMessage', email);
    })
});



server.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})
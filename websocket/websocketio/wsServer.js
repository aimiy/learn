var PORT = 8001;
var clientCount = 0;

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on("connection", (socket) => {
	clientCount++;
	console.log(`New connection,listening on${PORT},${clientCount}`)
	let userId = clientCount;
	socket.broadcast.emit(userId + "come in");
	socket.on("text", function (str) {
		console.log("Received " + str)
		io.emit('text', `${userId}says: ${str}`);
	})
	socket.on("disconnect", function (code, reason) {
		console.log(userId + "Connection closed")
		socket.broadcast.emit(`${userId}leave`)
	})
	socket.on("error", function (err) {
		console.log(err)
	})
});

server.listen(3000, () => {
	console.log('listening on *:' + 3000);
});

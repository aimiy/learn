import { createServer } from "http";
import { Server } from "socket.io";

var PORT = 8001;
var clientCount = 0;
const httpServer = createServer();
const io = new Server(httpServer, {
	// options
});

io.on("connection", (socket) => {
	clientCount++;
	console.log(`New connection,listening on${PORT},${clientCount}`)
	let userId = clientCount;
	broadcast(userId + "come in");
	conn.on("text", function (str) {
		console.log("Received " + str)
		// conn.sendText()
		broadcast(`${userId}says: ${str}`)
	})
	conn.on("close", function (code, reason) {
		console.log(userId + "Connection closed")
		broadcast(`${userId}leave`)
	})
	conn.on("error", function (err) {
		console.log(err)
	})
});

httpServer.listen(PORT);

function broadcast(text) {
	server.connections.forEach(function (conn) {
		conn.sendText(text)
	})
}
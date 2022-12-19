// Import Express
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connection");
const routes = require("./routes");

// Create an instance of express
const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==========================================================
// Routing
// ==========================================================
app.use(routes);
// ==========================================================

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const PORT = process.env.PORT || 3000;

// Use app.listen() as an object we can pass through socket.io
const server = app.listen(PORT, () => {
  console.log(`API server running on ${PORT}`);
});

// ==========================================================
// ==========================================================
// Socket.io
// ==========================================================
// ==========================================================
const io = require("socket.io")(server, {
  // If a user hasn't sent anything in 60 seconds, close the connection to save the bandwidth
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3001",
  },
});

io.on("connection", (socket) => {
  console.log(`${socket.id} just connected`);

  socket.on("success", () => {
    socket.join();
    socket.emit("connected");
  });

  // Join chat
  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User has joined");
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  //leave
  socket.off("setup", () => {
    console.log("User Disconnected");
    socket.leave();
  });
});

// ==========================================================

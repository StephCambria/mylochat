// Import Express
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connection");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const path = require('path');

//Apollo GraphQl
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { db } = require("./models/User");
const server = new ApolloServer({
  typeDefs,
  resolvers,
});



// Create an instance of express
const app = express();
dotenv.config();
connectDB();

app.use(express.json());

// ==========================================================
// Routing
// ==========================================================
app.use(userRoutes);
app.use(chatRoutes);
app.use(messageRoutes);
// ==========================================================

app.use(notFound);
app.use(errorHandler);


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
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("connected to socket.io");

  // Connect user to their personal web socket upon loading the app
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  // Join chat
  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User joined room " + room);
  });

  // Typing
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  // New message
  socket.on("new message", (newMessageReceived) => {
    var chat = newMessageReceived.chat;

    // For debugging
    if (!chat.users) return console.log("chat.users undefined");

    chat.users.forEach((user) => {
      if (user._id == newMessageReceived.sender._id) return;

      socket.in(user._id).emit("message received", newMessageReceived);
    });

    socket.off("setup", () => {
      console.log("User Disconnected");
      socket.leave(userData._id);
    });
  });
});

//apollo server
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`USE GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

startApolloServer(typeDefs, resolvers);

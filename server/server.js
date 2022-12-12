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

app.get("/", (req, res) => {
  res.send("API running successfully!");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/messages", messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

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

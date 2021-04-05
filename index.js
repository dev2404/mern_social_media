require("dotenv").config();
const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose");
const resolvers = require("./graphql/resolvers");

const typeDefs = require("./graphql/typeDefs");
const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

server.listen({ port: 3000 }).then((res) => {
  console.log(`Server running at ${res.url}`);
});

mongoose
  .connect("mongodb://localhost:27017/merng", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successfull..."))
  .catch((err) => console.log(err));

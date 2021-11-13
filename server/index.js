const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { typeDefs } = require('./schema/TypeDefs');
const { resolvers } = require('./schema/Resolvers');

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at port 4000`));
}

startApolloServer(typeDefs, resolvers);

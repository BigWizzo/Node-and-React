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

  const PORT = process.env.PORT || 4000;
  server.applyMiddleware({ app });

  // app.use(express.static('public'));

  app.use(express.static(path.join(__dirname, '/client/public')));

  // app.get('*', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  // });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
  });

  app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at port ${PORT}`)
  );
}

startApolloServer(typeDefs, resolvers);

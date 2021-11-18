const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');
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

  app.use(cors());

  app.use(express.static('build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });

  app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at port ${PORT}`)
  );
}

startApolloServer(typeDefs, resolvers);

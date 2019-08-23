import { config } from './config';
import schema from './index';
import User from './service/user/user';
import Trainee from './service/trainee/trainee';
const express = require('express');
const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');

const server = new ApolloServer({
  schema: makeExecutableSchema(schema),
  context: ({ req }) => {
    // get the user token from the headers
    const token = req.headers.authorization || '';
    return { token }
  },
  dataSources: () => {
    return {
      userApi: new User(),
      traineeApi: new Trainee(),
    };
  },

});
const app = express();
server.applyMiddleware({ app });

app.listen({ port: config.port }, () =>
  console.log(`🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`)
);


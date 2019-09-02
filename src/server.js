const http = require('http');
const { ApolloServer ,PubSub} = require('apollo-server-express');
const express = require('express');
import { config } from './config';
import User from './service/user/user';
import Trainee from './service/trainee/trainee';
import { typeDefs, resolvers } from './index';

const pubsub = new PubSub();

//define port
const port = config.port;
const app = express();
const server = new ApolloServer({
  typeDefs, resolvers,
  context: async ({ req, connection }) => {
    if (connection) {
      // check connection for metadata
      return connection.context;
    } else {
      // check from req
      const token = req.headers.authorization || "";

      return { token ,pubsub};
    }
  },
  dataSources: () => {
    return {
      userApi: new User(),
      traineeApi: new Trainee(),
    };
  },

});

server.applyMiddleware({ app })

const httpServer = http.createServer(app);

server.installSubscriptionHandlers(httpServer);

// ⚠️ Pay attention to the fact that we are calling `listen` on the http server variable, and not on `app`.
httpServer.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`)
})
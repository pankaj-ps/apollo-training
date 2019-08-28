const { PubSub } = require('apollo-server-express');
const pubsub = new PubSub();
const UPDATE_USER = 'UPDATE_USER';

export { pubsub, UPDATE_USER };
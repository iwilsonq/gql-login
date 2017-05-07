const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');

const models = require('./models');
const passportConfig = require('./services/auth');
const schema = require('./schema/schema');

const app = express();

const MONGO_URI = 'mongodb://localhost/gql-login';

mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to mongodb instance'))
  .on('error', error => console.log('Error connecting to mongodb instance: ', error));

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'aaabbbccc',
  store: new MongoStore({
    url: MONGO_URI,
    autoReconnect: true
  })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

module.exports = app;

const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;
const UserType = require('./types/user');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(source, { email, password }, req) {
        AuthService.signup({ email, password, req });
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(source, args, req) {
        AuthService.login({ email, password, req});
      }
    },
    logout: {
      type: UserType,
      resolve(source, args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    }
  }
});

module.exports = mutation;

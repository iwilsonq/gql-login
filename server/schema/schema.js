const { GraphQLSchema } = require('graphql');

const RootQuery = require('./types/root_query');
const mutation = require('./mutations');

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});

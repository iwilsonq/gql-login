const { GraphQLSchema } = require('graphql');

const RootQuery = require('./types/root_query');

module.exports = new GraphQLSchema({
  query: RootQuery,
  // mutation
});

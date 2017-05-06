const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'A user of this app',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString }
  }
});

module.exports = UserType;

const { gql } = require("apollo-server");

const typeDefs = gql`
	type Post {
		id: ID!
		body: String!
		userName: String!
		createdAt: String!
	}
	type Query {
		getPosts: [Post]
	}
`;

module.exports = typeDefs;

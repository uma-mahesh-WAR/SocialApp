const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");
const { MONGODB_URL } = require("./config.js");

const typeDefss = gql`
	type Query {
		sayHi: String!
	}
`;

const resolvers = {
	Query: {
		sayHi: () => "Hello!!!!!",
	},
};

const server = new ApolloServer({
	typeDefs: typeDefss,
	resolvers,
});

mongoose
	.connect(MONGODB_URL, { useNewUrlParser: true })
	.then(() => {
    console.log("Connected to Database")
		return server.listen({ port: 5000 });
	})
	.then((res) => {
		console.log(`Server running at ${res.url}`);
	});

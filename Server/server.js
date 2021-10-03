const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const resolvers = require("./graphQL/resolvers");
const { MONGODB_URL, PORT } = require("./config.js");
const typeDefs = require("./graphQL/typeDefs");

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

mongoose
	.connect(MONGODB_URL, { useNewUrlParser: true })
	.then(() => {
		console.log("Connected to Database");
		return server.listen(process.env.PORT || PORT);
	})
	.then((res) => {
		console.log(`Server running at ${res.url}`);
	});

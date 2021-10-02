const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const Post = require("./models/Post");
const { MONGODB_URL, PORT } = require("./config.js");

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

const resolvers = {
	Query: {
		async getPosts() {
			try {
				const posts = await Post.find();
				return posts;
			} catch (err) {
				throw new Error(err);
			}
		},
	},
};

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

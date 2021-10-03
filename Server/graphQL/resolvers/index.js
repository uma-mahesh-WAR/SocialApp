const postsResolvers = require("./posts");
const userResolvers = require("./users");

const rootResolver = {
	Query: {
		...postsResolvers.Query,
	},
};

module.exports = rootResolver;

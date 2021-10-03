const Post = require("../../models/Post");

const postsResolvers = {
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

module.exports = postsResolvers;

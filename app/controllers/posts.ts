import { RouterContext } from "../../deps.ts";
import { Post } from "../models/Post.ts"

export default {
	getAllPosts: async ({ response }: RouterContext) => {
		response.body = await Post.all();
	},

	createPost: async ({ request, response }: RouterContext) => {
		const { username, body } = await request.body().value;
		Post.create({
			username: username,
			body: body
		})
		response.body = { username, body }
	},

	getPostById: () => {

	},

	updatePostById: async () => {

	},

	deletePostById: () => {

	},
};

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

	getPostById: async ({ response, params }: { response: any, params: { id: string } } ) => {
		const post = await Post.find(params.id)
		response.body = post;
	},

	updatePostById: async ({ request, response, params }: { request: any, response: any, params: { id: string } } ) => {
		const { body } = await request.body().value;
		
		const post = await Post.find(params.id)
		post.body = body;
		await post.update();
		response.body = post;
	},

	deletePostById: () => {

	},
};

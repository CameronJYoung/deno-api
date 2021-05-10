import { RouterContext } from "../../deps.ts";
import { Post } from "../models/Post.ts"

export default {
	getAllPosts: async ({ response }: RouterContext) => {
		response.body = await Post.all();
	},

	createPost: async ({ request, response }: RouterContext) => {
		const { userId, body } = await request.body().value;
		Post.create({
			userId: 1,
			body: body
		})
		response.body = { userId, body }
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

	deletePostById: async ({ response, params }: { request: any, response: any, params: { id: string } } ) => {
		const post = await Post.find(params.id)
		await post.delete();
		response.body = post;
	},
};

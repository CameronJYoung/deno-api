import { RouterContext } from "../../deps.ts";
import { User } from "../models/User.ts"

export default {
	getAllUsers: async ({ response }: RouterContext) => {
		response.body = await User.all();
	},

	createUser: async ({ request, response }: RouterContext) => {
		const { username, body } = await request.body().value;
		User.create({
			username: username,
			body: body
		})
		response.body = { username, body }
	},

	getUserById: async ({ response, params }: { response: any, params: { id: string } } ) => {
		const post = await User.find(params.id)
		response.body = post;
	},

	updateUserById: async ({ request, response, params }: { request: any, response: any, params: { id: string } } ) => {
		const { body } = await request.body().value;
		
		const post = await User.find(params.id)
		post.body = body;
		await post.update();
		response.body = post;
	},

	deleteUserById: async ({ response, params }: { request: any, response: any, params: { id: string } } ) => {
		const post = await User.find(params.id)
		await post.delete();
		response.body = post;
	},
};

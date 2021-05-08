import { RouterContext } from "../../deps.ts";
import { User } from "../models/User.ts"

export default {
	getAllUsers: async ({ response }: RouterContext) => {
		response.body = await User.all();
	},

	createUser: async ({ request, response }: RouterContext) => {
		const { username, password, firstname, lastname, role } = await request.body().value;
		User.create({
			username: username,
			password: await User.hashPassword(password),
			firstname: firstname,
			lastname: lastname,
			role: role
		})
		response.body = { username, firstname, lastname }
	},

	getUserById: async ({ response, params }: { response: any, params: { id: string } } ) => {
		const user = await User.find(params.id)
		response.body = user;
	},

	updateUserById: async ({ request, response, params }: { request: any, response: any, params: { id: string } } ) => {
		const { username, password, firstname, lastname } = await request.body().value;
		
		const user = await User.find(params.id)
		if (username) {
			user.username = username
		}
		if (password) {
			user.password = User.hashPassword(password)
		}
		if (firstname) {
			user.firstname = firstname
		}
		if (lastname) {
			user.lastname = lastname
		}
		await user.update();
		response.body = user;
	},

	deleteUserById: async ({ response, params }: { request: any, response: any, params: { id: string } } ) => {
		const user = await User.find(params.id)
		await user.delete();
		response.body = user;
	},
};

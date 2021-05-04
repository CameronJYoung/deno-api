import { RouterContext } from "../../deps.ts";
import { Post } from "../models/Post.ts"

const posts = [
	{
		username: 'cameronape',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac molestie quam, at laoreet nisl. Aliquam finibus magna sit amet semper ultricies. In id mauris consectetur, convallis nunc ut, maximus eros. Sed tincidunt ligula a pulvinar tempor. Suspendisse vestibulum magna imperdiet leo tristique, eu pellentesque nulla rhoncus. Duis fermentum tempus vehicula. Donec a quam dapibus, elementum odio eu, fermentum lectus. Mauris faucibus a nibh ut vestibulum. Suspendisse placerat eu magna a lobortis. Cras non lectus porttitor purus dapibus congue ac nec nulla. Aliquam tellus lorem, semper sit amet ex quis, vulputate tristique purus. Suspendisse varius sapien nec nulla porttitor, sit amet auctor lacus vulputate.'
	},
	{
		username: 'andydagod',
		body: 'Pellentesque erat sapien, fringilla non finibus vitae, scelerisque nec lectus. Praesent ornare purus ac nisl pretium, efficitur venenatis urna venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer non pellentesque felis. Duis erat leo, vestibulum quis orci in, blandit maximus libero. Curabitur feugiat eu urna at pellentesque. Phasellus auctor lectus neque. Duis et ante eu dolor scelerisque laoreet. Vestibulum ac felis in ex convallis facilisis id sed nunc.'
	},
	{
		username: 'markisthebest',
		body: 'Vivamus imperdiet quis elit ut tristique. Sed a mollis ex. Nulla ac orci vestibulum, interdum nibh at, cursus felis. Phasellus ultrices auctor ante, nec cursus augue maximus eu. Nunc at iaculis lorem. Morbi vel libero ac tellus congue euismod. Ut ultrices volutpat erat in consequat. Nam cursus quam id metus congue hendrerit. Nunc tempor leo sit amet cursus hendrerit. Nulla vitae ex urna. Nam pharetra arcu odio, sed dignissim purus feugiat eget. Curabitur eros quam, placerat id elit a, pharetra tristique augue.'
	}
]

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

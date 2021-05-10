import { Router } from "../../deps.ts";

const router = new Router();

import postController from "../controllers/posts.ts"

router
	.get("/", postController.getAllPosts)
	.post("/", postController.createPost)
	.get("/:id", postController.getPostById)
	.get("/:id/user", postController.getPostUserById)
	.put("/:id", postController.updatePostById)
	.delete("/:id", postController.deletePostById);


export default router;

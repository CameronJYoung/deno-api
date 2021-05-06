import { Router } from "../../deps.ts";

const router = new Router();

import usersController from "../controllers/users.ts"

router
	.get("/", usersController.getAllPosts)
	.post("/", usersController.createPost)
	.get("/:id", usersController.getPostById)
	.put("/:id", usersController.updatePostById)
	.delete("/:id", usersController.deletePostById);


export default router;

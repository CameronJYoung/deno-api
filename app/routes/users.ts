import { Router } from "../../deps.ts";

const router = new Router();

import usersController from "../controllers/users.ts"

router
	.get("/", usersController.getAllUsers)
	.post("/", usersController.createUser)
	.get("/:id", usersController.getUserById)
	.get("/:id/posts", usersController.getUserPostsById)
	.put("/:id", usersController.updateUserById)
	.delete("/:id", usersController.deleteUserById);


export default router;

import { Router } from "../../deps.ts";

const router = new Router();

import usersController from "../controllers/users.ts"

router
	.get("/", usersController.getAllUsers)
	.post("/", usersController.createUser)
	.get("/:id", usersController.getUserById)
	.put("/:id", usersController.updateUserById)
	.delete("/:id", usersController.deleteUserById);


export default router;

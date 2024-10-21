import { Router } from "express";
import usersController from "../controllers/users.controller.js";

//import { executePolicies } from "../middleware/auth.js"; // Middleware para manejar roles

const router = Router();
// users routes

///api/users/
router.get('/',  usersController.getUsers);
///api/users/:userId
router.get('/:userId', usersController.getUserById);
///api/users/
router.post('/', usersController.createUser);
///api/users/:userId
router.delete('/:userId', usersController.deleteUser);
///api/users/:userId
router.put('/:userId', usersController.updateUser);

export default router;
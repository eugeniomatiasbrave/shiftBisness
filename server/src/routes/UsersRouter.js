import { Router } from "express";
import usersController from "../controllers/users.controller.js";
import { executePolicies } from "../middleware/auth.js"; // Middleware para manejar roles

const router = Router();

router.get('/', executePolicies(['ADMIN']), usersController.getUsers);
router.get('/:userId', executePolicies(['ADMIN', 'USER']), usersController.getUserById);
router.post('/', executePolicies(['ADMIN']), usersController.createUser);
router.delete('/:userId', executePolicies(['ADMIN']), usersController.deleteUser);
router.put('/:userId', executePolicies(['ADMIN', 'USER']), usersController.updateUser);

export default router;
import { Router } from "express";
import usersController from "../controllers/users.controller.js";
import { executePolicies } from "../middleware/auth.js"; // Middleware para manejar roles

const router = Router();
// users routes

///api/users/
router.get('/', executePolicies(['ADMIN']), usersController.getUsers);
///api/users/:userId
router.get('/:userId', usersController.getUserById);
///api/users/
router.post('/', executePolicies(['ADMIN']), usersController.createUser);
///api/users/:userId
router.delete('/:userId', executePolicies(['ADMIN']), usersController.deleteUser);
///api/users/:userId
router.put('/:userId', executePolicies(['ADMIN', 'USER']), usersController.updateUser);
// /api/users/:userId/shifts
router.post('/:userId/shifts',usersController.addShiftToUser); // hay algo mal en las politicas de seguridad 09/10/2024

export default router;
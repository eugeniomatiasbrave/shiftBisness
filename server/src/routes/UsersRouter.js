import { Router } from "express";
import usersController from "../controllers/users.controller.js";
import uploader from '../services/uploader.js';


const router = Router();

// users routes

///api/users/
router.get('/',  usersController.getUsers);
///api/users/:userId
router.get('/:userId', usersController.getUserById);
///api/users/email/:email
router.get('/email/:email', usersController.getUserByEmail);
///api/users/
router.post('/', usersController.createUser);
///api/users/:userId
router.delete('/:userId', usersController.deleteUser);
///api/users/:userId
router.put('/:userId',uploader.array('avatar',2), usersController.updateUser);

export default router;
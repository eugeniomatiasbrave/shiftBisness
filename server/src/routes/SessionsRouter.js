import { Router } from 'express';
import sessionsController from "../controllers/sessions.controller.js";
//import { authenticateToken, authorizeAdmin } from '../middleware/auth.js';
//import uploader from "../services/uploader.js";

const router = Router();
       
router.post('/register', sessionsController.register);
router.post('/login', sessionsController.login);
router.get('/logout', sessionsController.logout);
router.get('/current', sessionsController.current);
router.get('/admin',sessionsController.admin);
        
export default router;

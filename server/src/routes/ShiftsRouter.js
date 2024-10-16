import { Router } from "express";
import shiftsController from "../controllers/shifts.controller.js";
//import { authenticateToken } from "../middleware/auth.js"; // Middleware para manejar roles

const router = Router();

// /api/shifts/
router.get('/',  shiftsController.getShifts);
// /api/shifts/:sid
router.get('/:sid',  shiftsController.getShiftById);
// /api/shifts/
router.post('/', shiftsController.createShift); // ver si funciona
// /api/shifts/:sid
router.delete('/:sid',  shiftsController.deleteShift);
// /api/shifts/:sid
router.put('/:sid',  shiftsController.updateShift); // editar turno, tamto user
// /api/shifts/user/:userId
router.get('/user/:userId', shiftsController.getShiftsByUserId); 

export default router;
import { Router } from "express";
import shiftsController from "../controllers/shifts.controller.js";

const router = Router();

router.get('/',  shiftsController.getShifts);
router.get('/:sid',  shiftsController.getShiftById);
router.post('/', shiftsController.createShift); // ver si funciona
router.delete('/:sid',  shiftsController.deleteShift);
router.put('/:sid',  shiftsController.updateShift);

export default router;
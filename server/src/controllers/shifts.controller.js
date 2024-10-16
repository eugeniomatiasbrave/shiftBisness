import { shiftsService } from "../managers/index.js"

const getShifts = async (req,res) => {
    try {
        const shifts = await shiftsService.getShifts();
        if (!shifts) {
            return res.status(400).json({ status: "error", error: 'Error al obtener los turnos' });
        }
        res.json({ status: "success", payload: shifts });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
};

const getShiftById = async (req,res) => {
    try {
        const sid = req.params.sid;
        const shift = await shiftsService.getShiftById(sid);
        if (!shift) {
            return res.status(400).send({ status: "error", error: 'No se encontró el turno con el ID: ' + sid });
        }
        res.send({ status: "success", data: shift });
    } catch (error) {
        console.error('Error al obtener el turno:', error);
        res.status(500).send({ status: "error", error: 'Error al obtener el turno' });
    }
};

const createShift = async (req, res) => {
    try {
        const { userId, date, dayOfWeek, hour, duration, status, description, price } = req.body;

        if (!userId || !date || !dayOfWeek || !hour || !duration || !status || !description || !price) {
            return res.status(400).json({ status: "error", message: "Missing required fields" });
        }

        const shift = { userId, date, dayOfWeek, hour, duration, status, description, price };
        const newShift = await shiftsService.createShift(shift);
        res.status(201).json({ status: "success", message: "Turno creado", data: newShift });
    } catch (error) {
        console.error('Error al crear el turno:', error);
        res.status(500).send({ status: "error", error: 'Error al crear el turno' });
    }
};

const deleteShift = async (req,res) => {
    const {sid} = req.params;
    try {
        const shift = await shiftsService.getShiftById(sid);

        if (!shift) {
            return res.status(404).send({ status: "error", error: 'El turno que intentas borrar no existe' });
        }

        const deletedShift = await shiftsService.deleteShift(sid);

        if (!deletedShift) {
            return res.status(500).send({ status: "error", error: 'Error al borrar el turno' });
        }

        res.send({ status: "success", data: deletedShift });

    } catch (error) {
        console.error('Error al borrar el turno:', error);
        res.status(500).send({ status: "error", error: 'Hubo un problema al intentar borrar el turno' });
    }
};

const updateShift = async (req, res) => {
    const { sid } = req.params;
    const updateData = req.body;

    if (!updateData.userId) {
        updateData.userId = '670c29a1622be5f507318ebf' // userId del admin
     }
     
    try {
        const updatedShift = await shiftsService.updateShift(sid, updateData);
        res.json({ payload: updatedShift });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
   
    
const getShiftsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;

        const shiftsToUser = await shiftsService.getShiftsByUserId(userId)
        res.json({ status: "success", data: shiftsToUser });
    } catch (error) {
        console.error('Error al obtener los turnos:', error);
        res.status(500).send({ status: "error", error: 'Error al obtener los turnos' });
    }
};

export default { 
	getShifts,
	getShiftById,
	createShift,
	deleteShift,
	updateShift,
    getShiftsByUserId
};
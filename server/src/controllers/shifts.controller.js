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

const createShift = async (req,res) => {
    const { user, date, duration, status, description , price } = req.body;

    if (!user || !date || !duration || !status || !description || !price) {
        return res.status(400).send({ status: "error", error: 'Error Data ' }); //   
    };

    try {
        const newShift = {
            user,
            date,
            duration,
            status,
            description,
            price  
        };

        const result = await shiftsService.createShift(newShift);

        if (!result) {
            return res.status(500).send({ status: "error", error: 'Error' });
        }

        res.json({ status: "success", message: 'Shift created', payload: result }); // data: result es el turno creado.

    } catch (error) {
        console.log(error);
        res.status(500).send({ status: 'error', error: error });
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

const updateShift = async (req,res) => {
    try {
        const { sid } = req.params;
        const updateData = req.body;

        if (!updateData.user || !updateData.date || !updateData.duration || !updateData.status || !updateData.description || !updateData.price) {
            return res.status(400).send({ status: "error", error: 'Faltan datos para actualizar el turno' });
        }
        // Númerico y positivo
        if (updateData.price && isNaN(updateData.price) || updateData.price < 0) {
            return res.status(400).send({ status: "error", error: 'El precio debe ser un número positivo' });
        }
        const result = await shiftsService.updateShift(sid, updateData);

        if (result === -1) {
            return res.status(500).send({ status: "error", error: 'Error al actualizar el turno' });
        }
        const updatedShift = await shiftsService.getShiftById(sid);
        res.json({ status: "success", message: `Turno actualizado id: ${pid}`, data: updatedShift });
    } catch (error) {
        console.error('Error al actualizar el turno:', error);
        res.status(500).send({ status: "error", error: 'Error al actualizar el turno' });
    }
};

export default { 
	getShifts,
	getShiftById,
	createShift,
	deleteShift,
	updateShift
};
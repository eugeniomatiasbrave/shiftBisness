
import shiftModel from './models/shift.model.js';


export default class ShiftsManagers {
	
    getShifts() {
		return shiftModel.find({}).lean();
	};

    createShift(shift) {
        return shiftModel.create(shift);
    }

    getShiftById (sid) { // Busca solo uno
		return shiftModel.findOne({_id:sid}).lean(); 
	};

    getShiftsByUserId(userId) { // Busca por usuario
        return shiftModel.find({ userId }).lean();
    };

    deleteShift(sid){ // elimina uno
        return shiftModel.deleteOne({_id: sid});
    };	

    updateShift(sid, updateData) {
        return shiftModel.updateOne({ _id: String(sid) }, { $set: updateData });
    }

};

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

    deleteShift(sid){ // elimina uno
        return shiftModel.deleteOne({_id: sid});
    };	

    updateShift(sid, updateData){ // edita uno
        return shiftModel.updateOne({ _id: String(sid) }, { $set: updateData });
    };

};
import UserManagers from './UsersManagers.js';
import shiftModel from './models/shift.model.js';

const userManagers = new UserManagers();

export default class ShiftsManagers {
	
    getShifts() {
		return shiftModel.find({}).lean();
	};

    createShift(shift) {
        const newShift = shiftModel.create(shift);
        userManagers.addShiftToUser(shift.user, newShift._id);
        return newShift;
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
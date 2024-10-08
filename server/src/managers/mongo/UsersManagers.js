
import usersModel from "./models/user.model.js";

export default class UsersManagers {

    getUsers() {
        return usersModel.find();
    }

    getUserById(userId) {
        return usersModel.findOne({ _id: userId });
    }

    getUserByEmail(email) {
        return usersModel.findOne({ email });
    }

    createUser(user) {
        return usersModel.create({ ...user, shifts: [] });
    }

    deleteUser(userId) {
        return usersModel.deleteOne({ _id: userId });
    }

    updateUser(userId, updateData) {
        return usersModel.updateOne({ _id: userId }, { $set: updateData });
    }

    addShiftToUser(userId, shiftId) {
        return usersModel.findByIdAndUpdate(userId, { $push: { shifts: shiftId } });
    }
}
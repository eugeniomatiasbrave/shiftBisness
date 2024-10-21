import { usersService } from "../managers/index.js"
import userModel from '../managers/mongo/models/user.model.js';

const getUsers = async (req, res) => {
    try {
        const shiftsUser = await usersService.getUsers();
        res.json({ status: "success", data: shiftsUser });
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).send({ status: "error", error: 'Error al obtener los usuarios' });
    }
};

const getUserById = async (req, res) => {
    const userId = req.params.userId;
    
    try {
        const user = await usersService.getUserById(userId);
        res.json({ status: "success", data: user });
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).send({ status: "error", error: 'Error al obtener el usuario' });
    }
};

const createUser = async (req, res) => {
    const user = req.body;

    try {
        const newUser = await usersService.createUser(user);
        res.json({ status: "success", data: newUser });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).send({ status: "error", error: 'Error al crear el usuario' });
    }
};

const deleteUser = async (req, res) => {
    const userId = req.params.userId;

    try {
        const result = await usersService.deleteUser(userId);
        res.json({ status: "success", data: result });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).send({ status: "error", error: 'Error al eliminar el usuario' });
    }
};

const updateUser = async (req, res) => {
    const userId = req.params.userId;
    const updateData = req.body;


    try {
        const result = await usersService.updateUser(userId, updateData);
        res.json({ status: "success", data: result });
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).send({ status: "error", error: 'Error al actualizar el usuario' });
    }
};

export default { 
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
};


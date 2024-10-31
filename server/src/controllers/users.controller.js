import { usersService } from "../managers/index.js"
import mongoose from 'mongoose';
import __dirname from '../utils.js';

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
    try {
        const userId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).send({ status: "error", error: 'ID de usuario no válido' });
        }
        const user = await usersService.getUserById(userId);
        if (!user) {
            return res.status(404).send({ status: "error", error: 'Usuario no encontrado' });
        }
        res.json({ status: "success", data: user });
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).send({ status: "error", error: 'Error al obtener el usuario' });
    }
};

const getUserByEmail = async (req, res) => {
    const email = req.params.email;

    try {
        const user = await usersService.getUserByEmail(email);
        if (!user) {
            return res.status(404).send({ status: "error", error: 'Usuario no encontrado' });
        }
        res.json({ status: "success", data: user });
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).send({ status: "error", error: 'Error al obtener el usuario' });
    }
}

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

const updateUser =  async (req, res) => { 
    const { userId } = req.params;
    const { name, email } = req.body;
    
    if (!name || !email ) {  // Validar que los campos requeridos estén presentes
        return res.status(400).json({ status: "error", error: 'Faltan datos para actualizar el usuario' });
    }

    try {
        const user = await usersService.getUserById(userId);

        if (!user) {
            return res.status(404).send({ status: "error", error: 'Usuario no encontrado' });
        }

        const updateData = {
            name,
            email,
            avatar:[] 
        };

        if (req.files && req.files.length > 0) {
            for (let i = 0; i < req.files.length; i++) {
                updateData.avatar.push({ maintype: req.files[i].mimetype, path: `/files/users/${req.files[i].filename}`, main: i == 0 });
            }
        } 

        const result = await usersService.updateUser(userId, updateData);

        if (!result) {
            return res.status(500).send({ status: "error", error: 'Error al actualizar el avatar' });
        }

        res.json({ status: "success", message: 'Avatar actualizado', payload: result });

    } catch (error) {
        console.log(error);
        res.status(500).send({ status: 'error', error: error.message });
    }
};



export default { 
    getUsers,
    getUserById,
    getUserByEmail,
    createUser,
    deleteUser,
    updateUser
};
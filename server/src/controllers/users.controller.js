import { usersService } from "../managers/index.js"

const getUsers = async (req, res) => {
    try {
        const users = await usersService.getUsers();
        res.json({ status: "success", data: users });
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).send({ status: "error", error: 'Error al obtener los usuarios' });
    }
};

const getUserById = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await usersService.getUserById(userId);
        res.json({ status: "success", data: user });
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).send({ status: "error", error: 'Error al obtener el usuario' });
    }
};

const createUser = async (req, res) => {
    try {
        const user = req.body;
        const newUser = await usersService.createUser(user);
        res.json({ status: "success", data: newUser });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).send({ status: "error", error: 'Error al crear el usuario' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const result = await usersService.deleteUser(userId);
        res.json({ status: "success", data: result });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).send({ status: "error", error: 'Error al eliminar el usuario' });
    }
};

const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const updateData = req.body;
        const result = await usersService.updateUser(userId, updateData);
        const updatedUser = await usersService.getUserById(userId);
        res.json({ status: "success", message: `Usuario actualizado id: ${userId}`, data: updatedUser });
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).send({ status: "error", error: 'Error al actualizar el usuario' });
    }
};

const addShiftToUser = async (req, res) => {
    try {
        const { userId, sid } = req.params;
        const shift = await shiftsService.getShiftById(sid);
        if (!shift) {
            return res.status(404).send({ status: "error", error: 'Turno no encontrado' });
        }
        await usersService.addShiftToUser(userId, sid);
        const updatedUser = await usersService.getUserById(userId);
        res.json({ status: "success", message: `Turno agregado al usuario id: ${userId}`, data: updatedUser });
    } catch (error) {
        console.error('Error al agregar el turno al usuario:', error);
        res.status(500).send({ status: "error", error: 'Error al agregar el turno al usuario' });
    }
};


export default { 
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    addShiftToUser
};
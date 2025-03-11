const {AppError} = require('../utils/appError');

const users = [];
const getusers = (req, res) =>{
    res.json(users);
}

const addUser = (req, res) =>{
    const {nombre, email} = req.body;
    if (!nombre || !email) {
        throw new AppError('Faltan campos obligatoriios', 500);
    }
    const expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!expresionRegular.test(email)) {
        throw new AppError('correo invalido', 401);
    }
    //Agregar usuario
    const user = {
        nombre: nombre,
        email: email
    }
     users.push(user);
     res.json(user);

}

const deleteUser = (req, res) =>{
    const {index} = req.params;
    if (index >= 0 && index < users.length) {
        const deleteUser = users.splice(index, 1);
        res.json(deleteUser);
    }else {
        throw new AppError('Usuario no encontrado', 404);
    }
}

module.exports = {
    getusers,
    addUser,
    deleteUser
}
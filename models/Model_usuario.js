const Sequelize = require('sequelize');
const conexion = require('../config/conexion.js');

const UsuarioModel = conexion.define("usuarios", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apellidos: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    telefono: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    tipo_usuario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    pass: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    fecha_registro: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW 
    }
});

module.exports = UsuarioModel;

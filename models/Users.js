const Sequelize = require('sequelize');
const db = require('../database/db');

const User = db.define('barberShop_users',{
    id:{
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    name:{
        allowNull: false,
        type: Sequelize.STRING(50),
    },
    email:{
        allowNull: false,
        type: Sequelize.STRING,
    },
    phoneNumber:{
        allowNull: false,
        type: Sequelize.STRING(11),
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    profileImg: {
        allowNull: true,
        type: Sequelize.STRING,
    }
});

// Cria a tabela com Sequelize
// User.sync();

//excluir a tabela e criar novamente
//User.sync({force:true});

//verificar se algum diferença na tabela , realiza alteracao
// User.sync({alter: true});

module.exports = User;
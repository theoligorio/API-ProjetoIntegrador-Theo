const Sequelize = require('sequelize');
const db = require('../database/db');

const Services = db.define('barberShop_services', {
    id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING(50),
    },
    description: {
        allowNull: true,
        type: Sequelize.STRING,
    },
    price: {
        allowNull: false,
        type: Sequelize.DECIMAL(15,2),
    }
})

//Criar a tabela com sequelize
// Services.sync();

//Excluir a tabela e criar novamente
// Services.sync({ force: true});

//Verificar se há alguma diferença na tabela, realiza alteração
// Services.sync({ alter: true});

module.exports = Services;
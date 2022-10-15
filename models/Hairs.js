const Sequelize = require('sequelize');
const db = require('../database/db');
const Categories = require('./Category');

const Haircuts = db.define('barberShop_cortes', {
    id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    name:{
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

Haircuts.belongsTo(Categories, {
    constraint: true,
    foreignKey: 'categorieId',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

//Criar a tabela com sequelize
// Haircuts.sync();

//Excluir a tabela e criar novamente
// Haircuts.sync({ force: true});

//Verificar se há alguma diferença na tabela, realiza alteração
// Haircuts.sync({ alter: true});

module.exports = Haircuts;
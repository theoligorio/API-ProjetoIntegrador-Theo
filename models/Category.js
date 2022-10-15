const Sequelize = require('sequelize');
const db = require('../database/db')

const Categories = db.define('barberShop_categories', {
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
    }
});

//Criar a tabela com sequelize
//Categories.sync();

//Excluir a tabela e criar novamente
// Categories.sync({ force: true });

//Verificar se há alguma diferença na tabela, realiza alteração
// Categories.sync({ alter: true });

module.exports = Categories;
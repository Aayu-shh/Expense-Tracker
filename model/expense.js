const { Sequelize } = require('sequelize');
const sequelize = require('../util/database1');

//Table name by default is Expenses1
const Expense = sequelize.define('expense',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    amount:{
        type: Sequelize.DOUBLE,
        allowNull : false
    },
    description:{
        type: Sequelize.STRING,
        allowNull:false
    },
    type: Sequelize.STRING
});

module.exports = Expense;
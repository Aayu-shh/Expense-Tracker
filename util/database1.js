const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('general', 'root', '#Ash28jun#', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;
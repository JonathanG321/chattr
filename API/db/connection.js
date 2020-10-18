const Sequelize = require('sequelize');

const connection = 'postgres://localhost/chattr_dev';

const sequelize = new Sequelize(connection);

module.exports = sequelize;

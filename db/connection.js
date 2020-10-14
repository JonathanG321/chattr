const Sequelize = require('sequelize');

const connection = process.env.NODE_ENV === 'postgres://localhost/chattr_dev';

const sequelize = new Sequelize(connection);

module.exports = sequelize;

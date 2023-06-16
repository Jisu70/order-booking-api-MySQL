// Dependencies
const Sequelize = require('sequelize');

const sequelize = new Sequelize('sql12626438', 'sql12626438', 'FPIdqsSDys', {
  host: 'sql12.freesqldatabase.com',
  dialect: 'mysql',
  // logging: false, // This will stop the connection message from console
});

module.exports = sequelize;

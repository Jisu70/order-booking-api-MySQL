// Dependencies
// for online database
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('sql12626438', 'sql12626438', 'FPIdqsSDys', {
//   host: 'sql12.freesqldatabase.com',
//   dialect: 'mysql',
//   // logging: false, // This will stop the connection message from console
// });

// module.exports = sequelize;


// for local 

// Dependencies
const Sequelize = require('sequelize') ; 

const sequelize = new Sequelize('order_booking', 'root', '1234567890', {
  dialect : 'mysql',
  host : 'localhost'
})

module.exports = sequelize




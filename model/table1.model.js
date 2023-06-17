const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Table1 = sequelize.define(
    'table1', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        item: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        amount: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        table: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false,
    }
);
module.exports = Table1;
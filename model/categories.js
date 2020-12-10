const Sequelize = require('sequelize');
const dbs = require('./db');

const Category = dbs.define("categories", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {}
    },
});

module.exports = Category;
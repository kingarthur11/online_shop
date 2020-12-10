const Sequelize = require('sequelize');
const dbs = require('./db');
const Category = require('./categories');
const Order = require('./order');

const Product = dbs.define("products", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {}
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {}
    },
    desc: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {}
    },
   quantity: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {}
    },
    imag: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {}
    },
    active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }   
}); 

Category.hasMany(Product);
Product.hasMany(Order);
Product.belongsTo(Category);
module.exports = Product;
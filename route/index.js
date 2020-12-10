const express = require('express');
const user = require('./user');
const product = require('./product');
const categories = require('./categories');
const order = require('./order');

const router = express.Router();
user(router);
product(router);
categories(router);
order(router);

module.exports = router;

const express = require('express');
const orderCont = require('../controller/order');

const router = express.Router();

module.exports = app => {
    router.get('/', orderCont.getAll);
    router.get('/id:', orderCont.getOne);
    router.post('/', orderCont.post);
    router.delete('/id', orderCont.deleteOne);
    router.delete('/', orderCont.deleteAll);
    router.put('/id', orderCont.update);

    app.use('/api/order', router);
};
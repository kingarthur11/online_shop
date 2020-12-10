const express = require('express');
const productCont = require('../controller/product');

const router = express.Router();

module.exports = app => {
    router.get('/', productCont.getAll);
    router.get('/id:', productCont.getOne);
    router.post('/', productCont.post);
    router.delete('/id', productCont.deleteOne);
    router.delete('/', productCont.deleteAll);
    router.put('/id', productCont.update);

    app.use('/api/product', router);
};
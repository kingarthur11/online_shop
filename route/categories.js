const express = require('express');
const catgyCont = require('../controller/categories');

const router = express.Router();

module.exports = app => {
    router.get('/', catgyCont.getAll);
    router.get('/id:', catgyCont.getOne);
    router.post('/', catgyCont.post);
    router.delete('/id', catgyCont.deleteOne);
    router.delete('/', catgyCont.deleteAll);
    router.put('/id', catgyCont.update);

    app.use('/api/order', router);
};
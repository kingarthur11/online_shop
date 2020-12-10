const Order = require('../model/order');
const User = require('./user')

exports.getAll = async (req, res, next) =>{
    try {   
    const order = await Order.findAll({
        where: {userId},
        attributes: ['orderId', [sequelize.fn('sum', sequelize.col('Order.price')), 'orderTotal'],
        [sequelize.fn('count', sequelize.col('Order.quantity')), 'itemCount']],
        include: {userId}
    });   
    return res.json(order)
    (next);
    } catch (error) {}
};
  
exports.getOne = (req, res, next) => {
    try {
    const {id} = req.params;
    const order = Order.findByPk(id);
    return res.json(order)
    (next);
    } catch (error) { }
};

exports.post = async (req, res, next) => {
    try { const {
        orderId,
        quantity,
        purchasePrice
    } = req.body;
    const order =await Order.create({
        orderId,
        quantity,
        purchasePrice});     
    return res.json(order)
        (next);
    } catch (error) { }
};

exports.deleteAll = (req, res, next) => {
    try {
     const order = Order.destroy();
    return res.json(order)
        (next);
    } catch (error) {}
};   

exports.deleteOne = (req, res, next) => {
    try {
    const {id} = req.params;
    const order = Order.destroy(id);
    return res.json(order)
        (next);
    } catch (error) {}    
};

exports.update = (req, res, next) => {
    try {
    const {id} = req.params;
    const {
        orderId,
        quantity,
        purchasePrice   
    } = req.body;   
    const order = Order.update({        
        orderId,
        quantity,
        purchasePrice            
    },
    { where: {id} });
    return res.json(order)
        (next);
    } catch (error) { }   
};

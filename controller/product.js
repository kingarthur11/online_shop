const Product = require('../model/product');
const Catgy = require('./categories')

exports.getAll = async (req, res, next) =>{
    try {   
    const {limit, offset} = req.query;
    const products = await Product.findAll({limit, offset, include: [Catgy]});   
        return res.json(products)
        (next);
    } catch (error) {}
};
  
exports.getOne = (req, res, next) => {
    try {
    const {id} = req.params;
    const product = Product.findByPk({id, include: [Catgy]});
    return res.json(product)
    (next);
    } catch (error) {}
};

exports.post = async (req, res, next) => {
    try {
    const {
        name,
        price,
        desc,
        quantity,
        imag,
        active,
        catId  
    } = req.body;
    const product =await Product.create({
        name,
        price,
        desc,
        quantity,
        imag,
        active: active ? active : false, 
        catId   
    });     
    return res.json(product)
        (next);
    } catch (error) {}   
};

exports.deleteAll = (req, res, next) => {
    try {
    const product = Product.destroy();
    return res.json(product)
        (next);
    } catch (error) {}
};

exports.deleteOne = (req, res, next) => {
    try {
    const {id} = req.params;
    const product = Product.destroy(id);
    return res.json(product)
        (next);
    } catch (error) {}    
};

exports.update = (req, res, next) => {
    try {
    const {id} = req.params;
    const {
        name,
        price,
        desc,
        quantity,
        imag,
        active, 
        catId   
    } = req.body;
    const product = Product.update({        
        name,
        price,
        desc,
        quantity,
        imag,
        active, 
        catId         
    },{ where: {id} });
    return res.json(product)
        (next);
    } catch (error) {}   
};

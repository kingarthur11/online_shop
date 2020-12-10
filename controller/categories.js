const Category = require('../model/categories');
const Product = require('../model/product');


exports.getAll = async (req, res, next) =>{
    try {  
        const catgy = await Category.findAll();   
        return res.json(catgy)
        (next);
    } catch (error) {}
};
  
exports.getOne = (req, res, next) => {
    try {    
    const {id} = req.params;
    const catgy = Category.findByPk({id, include: [product]});
    return res.json(catgy)
    (next);
    } catch (error) {}
};

exports.post = async (req, res, next) => {
    try {
    const { name } = req.body;
    const catgy = await Category.create({ name });     
    return res.json(catgy)
        (next);
    } catch (error) {}   
};

exports.deleteAll = (req, res, next) => {
    try {
    const catgy = Category.destroy();
    return res.json(catgy)
        (next);
    } catch (error) {}
};

exports.deleteOne = (req, res, next) => {
    try {
    const {id} = req.params;
    const catgy = Category.destroy(id);
    return res.json(catgy)
        (next);
    } catch (error) {}    
};

exports.update = (req, res, next) => {
    try {
    const {id} = req.params;
    const { name } = req.body;
    const catgy = Category.update({  name }, { where: {id} });
    return res.json(catgy)
        (next);
    } catch (error) {}   
};

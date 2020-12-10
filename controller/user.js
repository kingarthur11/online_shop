const User = require('../model/user');

exports.signUp = async (req, res, next) => {    
    try {const {userName, address, email, password, status} = req.body;
        verifyEmail =  await User.findOne({ where: {email} });
        if (verifyEmail) {
            return res.status(401).send({message: "this email has been taken by another user!"});
        } else {
        const user = await User.create({
                address,
                userName,
                email,
                pwd: password,
                status: status ? status : inactive  });                
            return res.json(user); 
        }        
    } catch (error) {}
};

exports.signIn = async (req, res, next) => {
    try {
        const {password, userName} = req.body;
        const userPass = await User.findOne({where: {userName}});
        const passIsValid = bCrypt.compareSync(password, userPass.pwd);
        if (!passIsValid) {
            return res.status(401).send({message: "invalid Password!"});   
        }
            return res.json(userPass); 
    } catch (error) {}       
};

exports.getAll = async (req, res, next) => {
    try {         
        const {limit, offset} = req.query;
        const user = await  User.findAll({limit, offset });        
            return res.json(user)
        (next);
    } catch (error) {}   
};

exports.getOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findByPk(id);    
            return res.json(user)
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
        address,
        userName,
        email,
        password,
        status 
    } = req.body;
    const product = Product.update({        
        address,
        userName,
        email,
        pwd: password,
        status         
    },{ where: {id} });
    return res.json(product)
        (next);
    } catch (error) {}   
};

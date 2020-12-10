const Sequelize = require('sequelize');
const dbs = require('./db');

const User = dbs.define("users",
 {
    userName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    pwd: {
       type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
     },
    status: {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active'
    }
 },
 {
     hooks: {
        beforeCreate: (user, cb) => {
            user.pwd = bcrypt.hashSync(
                user.pwd,
                bcrypt.genSaltSync(10),
                null
            );
            cb(null)
        }        
     }     
 });
   
module.exports = User;

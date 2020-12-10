const express = require('express');
const connec = require('./model/db');
const bodyparser = require('body-parser');
const routes = require('./route/index');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

const {
    PORT
} = process.env;

app.use('/', routes);

connec.sync({
        force: true
    })
    .then(result => {
        console.log('connect to the port');
    })
    .catch(err => {
        console.log('dint connect to the port');
    });

app.listen(PORT || 3000, err => {
    if (!err) console.log('reading from port 3000');
});


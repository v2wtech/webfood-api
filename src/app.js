const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const routes = require('./app/controllers');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/category', routes.category);
app.use('/product', routes.product);
app.use('/employee', routes.employee);

module.exports = app;

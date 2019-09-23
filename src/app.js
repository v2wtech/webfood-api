const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const routes = require('./app/controllers');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/category', routes.category);
app.use('/subcategory', routes.subcategory);
app.use('/product', routes.product);
app.use('/employee', routes.employee);
app.use('/client', routes.client);

module.exports = app;

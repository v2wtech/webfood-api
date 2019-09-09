const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const routes = require('./app/controllers');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/category', routes.category);

module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const category = require('./app/controllers/category')

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/category', category);

module.exports = app;
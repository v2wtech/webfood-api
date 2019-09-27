const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const routes = require('./app/controllers');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function loadRoutes(app, routes) {
  for (let route in routes) 
    app.use(`/api/${route}`, routes[route]);
}

loadRoutes(app, routes);

app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
  res.render('index.html');
});

module.exports = app;

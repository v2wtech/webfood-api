var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();

var jwt = require('jsonwebtoken');

const { jwtOptions } = require('./auth');

const { Employee } = require('../models');

router.post('/', async (req, res) => {
  const { user, password } = req.body;

  if (user && password) {
    let employee = await Employee.getEmployee({ user: user });

    if (!employee) {
      res.status(401).json({ msg: "Employee doesn't exist", employee });
    }
    else {
      if (employee.password == password) {
        let payload = { id: employee.id };
        let token   = jwt.sign(payload, jwtOptions.secretOrKey);

        res.json({ msg: 'ok', token: token });
      }
      else {
        res.status(401).json({ msg: 'Password is incorrect.' });
      }
    }
  }
});

module.exports = router;

const jwt = require('jsonwebtoken');
const { jwtOptions } = require('../../config/auth');
const { Employee } = require('../models');

module.exports = {
  async store(req, res) {
    const { user, password } = req.body;

    if (user && password) {
      let employee = await Employee.getEmployee({ user });
  
      if (!employee) {
        return res.status(401).json({ msg: "Employee doesn't exist", employee });
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
  }
};


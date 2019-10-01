var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();

const { Employee } = require('../models');

const { sanitize } = require('./sanitizer.js');

const Op = Sequelize.Op;

router.get('/', async (req, res) => {
  await Employee.findAll({ where: { enabled: 1 } })
    .then(employee => res.json(employee))
    .catch(err => console.log("Error: " + err))
});

router.get('/disabled', async (req, res) => {
  await Employee.findAll({ where: { enabled: 0 } })
    .then(employee => res.json(employee))
    .catch(err => console.log("Error: " + err))
});

router.get('/id/:id', async (req, res) => {
  await Employee.findByPk(req.params.id)
    .then(employee => res.json(employee))
    .catch(err => console.log("Error: " + err))
});

router.get('/search/:employee', async (req, res) => {
  await Employee.findAll({
    where: {
      [Op.or]: [
        {
          name: {
            [Op.like]: `%${req.params.employee}%`
          }
        },
        {
          rg: {
            [Op.like]: `%${req.params.employee}%`
          }
        }
      ]
    }
  })
    .then(employee => res.json(employee))
    .catch(err => console.log("Error: " + err))
});

router.post('/register', async (req, res) => {
  await Employee.findOrCreate({
    where: {
      rg: req.body.rg
    },
    defaults: {
      name: req.body.name,
      phone: sanitize({ phone: req.body.phone }),
      role: req.body.role,
      permission: req.body.permission,
      user: req.body.user,
      password: req.body.password,
      enabled: 1,
    }
  })
    .then(([employee]) => {
      res.json(employee.get({
        plain: true,
      }));
    })
    .catch(err => console.log("Error: " + err))
});

router.put('/update/:id', async (req, res) => {
  await Employee.update(req.body, { where: { id: req.params.id } })
    .then(employee => res.json(employee))
    .catch(err => console.log("Error: " + err))
});

router.delete('/delete/:id', async (req, res) => {
  await Employee.destroy({ where: { id: req.params.id } })
    .then(employee => res.json(employee))
    .catch(err => console.log("Error: " + err))
});

module.exports = router;


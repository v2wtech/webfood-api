var express = require('express');
var router = express.Router();

const { Employee } = require('../models');

router.get('/', async (req, res) => {
  const employee = await Employee.findAll(req.body);
  res.json(employee);
});

router.get('/enabled', async (req, res) => {
  const employee = await Employee.findAll({ where: { enabled: 1 }});
  res.json(employee);
});

router.get('/disabled', async (req, res) => {
  const employee = await Employee.findAll({ where: { enabled: 0 }});
  res.json(employee);
});

router.get('/:id', async (req, res) => {
  const employee = await Employee.findOne({ where: { id: req.params.id }});
  res.json(employee);
});

router.post('/register', async (req, res) => {
  const employee = await Employee.create(req.body);
  res.json(employee);
});

router.put('/update/:id', async (req, res) => {
  const employee = await Employee.update(req.body, { where: { id: req.params.id }});
  res.json(employee);
});

router.delete('/delete/:id', async (req, res) => {
  const employee = await Employee.destroy({ where: { id: req.params.id }});
  res.json(employee);
});

module.exports = router;


var express = require('express');
var router = express.Router();

const { Client } = require('../models');

router.get('/', async (req, res) => {
  const client = await Client.findAll(req.body);
  res.json(client);
});

router.get('/enabled', async (req, res) => {
  const client = await Client.findAll({ where: { enabled: 1 }});
  res.json(client);
});

router.get('/disabled', async (req, res) => {
  const client = await Client.findAll({ where: { enabled: 0 }});
  res.json(client);
});

router.get('/:id', async (req, res) => {
  const client = await Client.findOne({ where: { id: req.params.id }});
  res.json(client);
});

router.post('/register', async (req, res) => {
  const client = await Client.create(req.body);
  res.json(client);
});

router.put('/update/:id', async (req, res) => {
  const client = await Client.update(req.body, { where: { id: req.params.id }});
  res.json(client);
});

router.delete('/delete/:id', async (req, res) => {
  const client = await Client.destroy({ where: { id: req.params.id }});
  res.json(client);
});

module.exports = router;

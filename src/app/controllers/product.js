var express = require('express');
var router = express.Router();

const { Product } = require('../models');

router.get('/', async (req, res) => {
  const product = await Product.findAll(req.body);
  res.json(product);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findOne({ where: { id: req.params.id }});
  res.json(product);
});

router.post('/register', async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

router.put('/update/:id', async (req, res) => {
  const product = await Product.update(req.body, { where: { id: req.params.id }});
  res.json(product);
});

router.delete('/delete/:id', async (req, res) => {
  const product = await Product.destroy({ where: { id: req.params. id }});
  res.json(product);
});

module.exports = router;

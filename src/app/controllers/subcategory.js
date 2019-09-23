var express = require('express');
var router = express.Router();

const { Subcategory } = require('../models');

router.get('/', async (req, res) => {
  const subcategory = await Subcategory.findAll(req.body);
  res.json(subcategory);
});

router.get('/category/:id', async (req, res) => {
  const subcategory = await Subcategory.findAll({ where: { idCategory: req.params.id }});
  res.json(subcategory);
});

router.get('/enabled', async (req, res) => {
  const subcategory = await Subcategory.findAll({ where: { enabled: 1 }});
  res.json(subcategory);
});

router.get('/disabled', async (req, res) => {
  const subcategory = await Subcategory.findAll({ where: { enabled: 0 }})
  res.json(subcategory);
});

router.get('/:id', async (req, res) => {
  const subcategory = await Subcategory.findOne({ where: { id: req.params.id }});
  res.json(subcategory);
});

router.post('/register', async (req, res) => {
  const subcategory = await Subcategory.create(req.body);
  res.json(subcategory);
});

router.put('/update/:id', async (req, res) => {
  const subcategory = await Subcategory.update(req.body, { where: { id: req.params.id }});
  res.json(subcategory);
});

router.delete('/delete/:id', async (req, res) => {
  const subcategory = await Subcategory.destroy({ where: { id: req.params.id }});
  res.json(subcategory);
});

module.exports = router;

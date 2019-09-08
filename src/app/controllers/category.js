var express = require('express');
var router = express.Router();

const { Category } = require('../models');

router.get('/', async (req, res) => {
  const category = await Category.findAll(req.body);
  res.json(category);
})

router.get('/:id', async (req, res) => {
  const category = await Category.findOne({ where: { id: req.params.id }});
  res.json(category);
})

router.get('/:id/subcategory', async (req, res) => {
  const category = await Category.findAll({ where: { idSubCategory: req.params.id }});
  res.json(category);
})

router.post('/register', async (req, res) => {
  const category = await Category.create(req.body);
  res.json(category);
})

router.put('/update/:id', async (req, res) => { 
  const category = await Category.update(req.body, { where: { id: req.params.id }})
  res.json(category)
})

router.delete('/delete/:id', async (req, res) => { 
  const category = await Category.destroy({ where: { id: req.params.id }})
  res.json(category)
})

module.exports = router;
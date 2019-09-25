var express = require('express');
var router = express.Router();

const { Product } = require('../models');

router.get('/', async (req, res) => {
  await Product.findAll({ where: { enabled: 1 }})
    .then(product => res.json(product))
    .catch(err => console.log("Error: " + err))
});

router.get('/disabled', async (req, res) => {
  await Product.findAll({ where: { enabled: 0 }})
    .then(product => res.json(product))
    .catch(err => console.log("Error: " + err))
});

router.get('/id/:id', async (req, res) => {
  await Product.findByPk(req.params.id)
    .then(product => res.json(product))
    .catch(err => console.log("Error: " + err))
});

router.get('/title/:title', async (req, res) => {
  await Product.findOne({ where: { title: req.params.title }})
    .then(product => res.json(product))
    .catch(err => console.log("Error: " + err))
});

router.post('/register', async (req, res) => {
  await Product.findOrCreate({ 
    where: { 
      title: req.body.title 
    }, 
    defaults: { 
      valuePaid: req.body.valuePaid,
      priceSell: req.body.priceSell,
      CategoryId: req.body.CategoryId,
      SubCategoryId: req.body.SubCategoryId,
      enabled: 1 
    }
  })
  .then(([product]) => {
    res.json(product.get({
      plain: true,
    }));
  })
  .catch(err => console.log("Error: "+ err))
});

router.put('/update/:id', async (req, res) => {
  await Product.update(req.body, { where: { id: req.params.id }})
    .then(product => res.json(product))
    .catch(err => console.log("Error: " + err))
});

router.delete('/delete/:id', async (req, res) => {
  await Product.destroy({ where: { id: req.params. id }})
    .then(product => res.json(product))
    .catch(err => console.log("Error: " + err))
});

module.exports = router;

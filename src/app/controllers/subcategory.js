var express = require('express');
var router = express.Router();

const { Subcategory } = require('../models');

router.get('/', async (req, res) => {
  await Subcategory.findAll({ where: { enabled: 1 }})
    .then(subcategory => res.json(subcategory))
    .catch(err => console.log("Error: " + err))
});

router.get('/disabled', async (req, res) => {
  await Subcategory.findAll({ where: { enabled: 0 }})
    .then(subcategory => res.json(subcategory))
    .catch(err => console.log("Error: " + err))
});

router.get('/id/:id', async (req, res) => {
  await Subcategory.findByPk(req.params.id)
    .then(subcategory => res.json(subcategory))
    .catch(err => console.log("Error: " + err))
});

router.get('/title/:title', async (req, res) => {
  await Subcategory.findOne({ where: { title: req.params.title }})
    .then(subcategory => res.json(subcategory))
    .catch(err => console.log("Error: " + err))
});

router.post('/register', async (req, res) => {
  await Subcategory.findOrCreate({ 
    where: { 
      title: req.body.title 
    }, 
    defaults: { 
      CategoryId: req.body.CategoryId, 
      enabled: 1 
    }
  })
  .then(([subcategory]) => {
    res.json(subcategory.get({
      plain: true,
    }));
  })
  .catch(err => console.log("Error: "+ err))
});

router.put('/update/:id', async (req, res) => {
  await Subcategory.update(req.body, { where: { id: req.params.id }})
    .then(subcategory => res.json(subcategory))
    .catch(err => console.log("Error: " + err))
});

router.delete('/delete/:id', async (req, res) => {
  await Subcategory.destroy({ where: { id: req.params.id }})
    .then(subcategory => res.json(subcategory))
    .catch(err => console.log("Error: " + err))
});

module.exports = router;

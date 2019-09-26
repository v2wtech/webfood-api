var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();

const { Category } = require('../models');
const { Subcategory } = require('../models');

const Op = Sequelize.Op;

router.get('/', async (req, res) => {
  await Category.findAll({ where: { enabled: 1 }})
    .then(category => res.json(category))
    .catch(err => console.log("Error: " + err))
});

router.get('/disabled', async (req, res) => {
  await Category.findAll({ where: { enabled: 0 }})
    .then(category => res.json(category))
    .catch(err => console.log("Error: " + err))
});

router.get('/id/:id', async (req, res) => {
  await Category.findByPk(req.params.id)
    .then(category => res.json(category))
    .catch(err => console.log("Error: " + err))
});

router.get('/title/:title', async (req, res) => {
  await Category.findAll({ 
    where: { 
      title: {
        [Op.like]: `%${req.params.title}%`
      }
    }
  })
    .then(category => res.json(category))
    .catch(err => console.log("Error: " + err))
});

router.get('/:id/subcategory', async (req, res) => {
  await Category.findByPk(req.params.id, { include: [Subcategory] })
    .then(category => res.json(category.dataValues))
    .catch(err => console.log("Error: " + err))
});

router.post('/register', async (req, res) => {
  await Category.findOrCreate({ 
    where: { 
      title: req.body.title 
    }, 
    defaults: { 
      enabled: 1
    }
  })
    .then(([category]) => {
      res.json(category.get({
        plain: true,
      }));
    })
    .catch(err => console.log("Error: "+ err))
});

router.put('/update/:id', async (req, res) => {
  await Category.update(req.body, { where: { id: req.params.id }})
    .then(category => res.json(category))
    .catch(err => console.log("Error: " + err))
});

router.delete('/delete/:id', async (req, res) => {
  await Category.destroy({ where: { id: req.params.id }})
    .then(category => res.json(category))
    .catch(err => console.log("Error: " + err))
});

module.exports = router;

var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();

const { Group } = require('../models');
const { Category } = require('../models');
const { Subcategory } = require('../models');

const Op = Sequelize.Op;

router.get('/', async (req, res) => {
  await Group.findAll({ where: { enabled: 1 }})
    .then(group => res.json(group))
    .catch(err => console.log("Error: " + err))
});

router.get('/disabled', async (req, res) => {
  await Group.findAll({ where: { enabled: 0 }})
    .then(group => res.json(group))
    .catch(err => console.log("Error: " + err))
});

router.get('/id/:id', async (req, res) => {
  await Group.findByPk(req.params.id)
    .then(group => res.json(group))
    .catch(err => console.log("Error: " + err))
});

router.get('/title/:title', async (req, res) => {
  await Group.findAll({ 
    where: { 
      title: {
        [Op.like]: `%${req.params.title}%`
      }
    }
  })
    .then(group => res.json(group))
    .catch(err => console.log("Error: " + err))
});

router.get('/:id/category', async (req, res) => {
  await Group.findByPk(req.params.id, { include: [Category] })
    .then(group => res.json(group.dataValues))
    .catch(err => console.log("Error: " + err))
});

router.post('/register', async (req, res) => {
  const options = {
    where: {},
    defaults: {
      enabled: 1
    }
  };

  const { title } = req.body;

  if (title !== undefined)
    options.where.title = title;

  await Group.findOrCreate({
    options
  })
    .then(([group]) => {
      res.json(group.get({
        plain: true,
      }));
    })
    .catch(err => console.log("Error: "+ err))
});

router.put('/update/:id', async (req, res) => {
  await Group.update(req.body, { where: { id: req.params.id }})
    .then(group => res.json(group))
    .catch(err => console.log("Error: " + err))
});

router.delete('/delete/:id', async (req, res) => {
  await Group.destroy({ where: { id: req.params.id }})
    .then(group => res.json(group))
    .catch(err => console.log("Error: " + err))
});

module.exports = router;

var express = require('express');
var Seqelize = require('sequelize');
var router = express.Router();

const { Client } = require('../models');

const Op = Seqelize.Op;

router.get('/', async (req, res) => {
  await Client.findAll({ where : { enabled: 1 }})
    .then(client => res.json(client))
    .catch(err => console.log("Error: " + err))
});

router.get('/disabled', async (req, res) => {
  await Client.findAll({ where : { enabled: 0 }})
    .then(client => res.json(client))
    .catch(err => console.log("Error: " + err))
});

router.get('/id/:id', async (req, res) => {
  await Client.findByPk(req.params.id)
    .then(client => res.json(client))
    .catch(err => console.log("Error: " + err))
});

router.get('/name/:name', async (req, res) => {
  await Client.findAll({ 
    where: {
      name: {
        [Op.like]: `%${req.params.name}%`
      }
    }
  })
    .then(client => res.json(client))
    .catch(err => console.log("Error: " + err))
});

router.get('/phone/:phone', async (req, res) => {
  await Client.findAll({ 
    where: {
      phone: {
        [Op.like]: `%${req.params.phone}%`
      }
    }
  })
    .then(client => res.json(client))
    .catch(err => console.log("Error: " + err))
});

router.post('/register', async (req, res) => {
  await Client.findOrCreate({ 
    where : {
      phone: req.body.phone,
    },
    defaults: {
      name: req.body.name,
      adress: req.body.adress,
      enabled: 1
    }
  })
    .then(([client]) => {
      res.json(client.get({
        plain: true,
      }));
    })
    .catch(err => console.log("Error: " + err))
});

router.put('/update/:id', async (req, res) => {
  await Client.update(req.body, { where: { id: req.params.id }})
    .then(client => res.json(client))
    .catch(err => console.log("Error: " + err))
});

router.delete('/delete/:id', async (req, res) => {
  await Client.destroy({ where: { id: req.params.id }})
    .then(client => res.json(client))
    .catch(err => console.log("Error: " + err))
});

module.exports = router;

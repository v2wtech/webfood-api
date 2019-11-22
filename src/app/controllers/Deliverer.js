const Sequelize = require('sequelize');
const { Deliverer } = require('../models');

const Op = Sequelize.Op;

module.exports = {
  async index(req, res) {
    const { name, enabled } = req.query;

    await Deliverer.findAll({
      where: {
        name: { [Op.like]: `%${ name }%` },
        [Op.or]: [{
          enabled: { [Op.like]: `%${ enabled }%` }
        }]
      }
    })
      .then(deliverer => { return res.json(deliverer); })
      .catch(err => console.log('Error: ' + err))
  },

  async show(req, res) {
    const { name, enabled } = req.query;

    await Deliverer.findOne({
      where: {
        name: { [Op.like]: `%${ name }%` },
        [Op.or]: [{
          enabled: { [Op.like]: `%${ enabled }%` }
        }]
      }
    })
      .then(deliverer => { return res.json(deliverer); })
      .catch(err => console.log('Error: ' + err))
  },

  async store(req, res) {
    const { name, dateBirth, rg, cpf, phone, registrationNumber, enablingCategory, expirationDate } = req.body;

    await Deliverer.findOrCreate({
      where: { cpf },
      defaults: { name, dateBirth, rg, phone, registrationNumber, enablingCategory, expirationDate, enabled: 1 }
    })
      .then(([deliverer, created]) => {
        res.json(deliverer.get({ plain: true }));
        console.log('Created deliverer: ' + created);
      })
      .catch(err => console.log('Error: ' + err))
  },

  async update(req, res) {
    const { deliverer_id } = req.params;
    const { name, dateBirth, rg, cpf, phone, registrationNumber, enablingCategory, expirationDate, enabled } = req.body;

    await Deliverer.update({ name, dateBirth, rg, cpf, phone, registrationNumber, enablingCategory, expirationDate, enabled }, { where: { id: deliverer_id } })
      .then(deliverer => { return res.json(deliverer); })
      .catch(err => console.log('Error: ' + err))
  },

  async destroy(req, res) {
    const { deliverer_id } = req.params;

    await Deliverer.destroy({ where: { id: deliverer_id } })
      .then(deliverer => { return res.json(deliverer); })
      .catch(err => console.log('Error: ' + err))
  }
};
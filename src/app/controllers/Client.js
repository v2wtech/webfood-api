const Sequelize = require('sequelize');
const { Client } = require('../models');

const Op = Sequelize.Op;

module.exports = {
  async index(req, res) {
    const { phone, enabled } = req.query;

    await Client.findAll({
      where: {
        phone: { [Op.like]: `%${ phone }%` },
        [Op.or]: [{
          enabled: { [Op.like]: `%${ enabled }%` }
        }]
      }
    })
      .then(client => { return res.json(client); })
      .catch(err => console.log('Error: ' + err))
  },

  async show(req, res) {
    const { phone, enabled } = req.query;

    await Client.findOne({
      where: {
        phone: { [Op.like]: `%${ phone }%` },
        [Op.or]: [{
          enabled: { [Op.like]: `%${ enabled }%` }
        }]
      }
    })
      .then(client => { return res.json(client); })
      .catch(err => console.log('Error: ' + err))
  },

  async store(req, res) {
    const { name, phone, address } = req.body;

    await Client.findOrCreate({
      where: { phone },
      defaults: { name, address, enabled: 1 }
    })
      .then(([client, created]) => {
        res.json(client.get({ plain: true }));
        console.log('Created client: ' + created);
      })
      .catch(err => console.log('Error: ' + err))
  },

  async update(req, res) {
    const { client_id } = req.params;
    const { name, phone, address, enabled } = req.body;

    await Client.update({ name, phone, address, enabled }, { where: { id: client_id } })
      .then(client => { return res.json(client); })
      .catch(err => console.log('Error: ' + err))
  },

  async destroy(req, res) {
    const { client_id } = req.params;

    await Client.destroy({ where: { id: client_id } })
      .then(client => { return res.json(client); })
      .catch(err => console.log('Error: ' + err))
  }
};
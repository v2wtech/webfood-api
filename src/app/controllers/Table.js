const Sequelize = require('sequelize');
const { Table } = require('../models');

const Op = Sequelize.Op;

module.exports = {
  async index(req, res) {
    const { description, enabled } = req.query;

    await Table.findAll({
      where: {
        description: { [Op.like]: `%${ description }%` },
        [Op.or]: [{ 
          enabled: { [Op.like]: `%${ enabled }%` }
        }]
      }
    })
      .then(table => { return res.json(table); })
      .catch(err => console.log('Error: ' + err))
  },

  async show(req, res) {
    const { description } = req.query;

    await Table.findOne({
      where: {
        description: { [Op.like]: `%${ description }%` }
      }
    })
      .then(table => { return res.json(table) })
      .catch(err => console.log('Error: ' + err))
  },

  async store(req, res) {
    const { description } = req.body; 

    await Table.findOrCreate({ where: { description }, defaults: { enabled: 1 } })
      .then(([table, created]) => {
        res.json(table.get({ plain: true }));
        console.log('Created table: ' + created);
      })
      .catch(err => console.log('Error: ' + err))
  },

  async update(req, res) {
    const { table_id } = req.params;
    const { description, enabled } = req.body;

    await Table.update({ description, enabled }, { where: { id: table_id } })
      .then(table => { return res.json(table); })
      .catch(err => console.log('Error: ' + err))
  },

  async destroy(req, res) {
    const { table_id } = req.params;

    await Table.destroy({ where: { id: table_id } })
      .then(table => { return res.json(table); })
      .catch(err => console.log('Error: ' + err));
  }
};
const Sequelize = require('sequelize');
const { Group } = require('../models');

const Op = Sequelize.Op;

module.exports = {
  async index(req, res) {
    const { title, enabled } = req.query;

    await Group.findAll({
      where: {
        title: { [Op.like]: `%${ title }%` },
        [Op.or]: [{ 
          enabled: { [Op.like]: `%${ enabled }%` }
        }]
      }
    })
      .then(group => { return res.json(group); })
      .catch(err => console.log('Error: ' + err))
  },

  async show(req, res) {
    const { title } = req.query;

    await Group.findOne({
      where: {
        title: { [Op.like]: `%${ title }%` }
      }
    })
      .then(group => { return res.json(group) })
      .catch(err => console.log('Error: ' + err))
  },

  async store(req, res) {
    const { title } = req.body; 

    await Group.findOrCreate({ where: { title }, defaults: { enabled: 1 } })
      .then(([group, created]) => {
        res.json(group.get({ plain: true }));
        console.log('Created group: ' + created);
      })
      .catch(err => console.log('Error: ' + err))
  },

  async update(req, res) {
    const { group_id } = req.params;
    const { title, enabled } = req.body;

    await Group.update({ title, enabled }, { where: { id: group_id } })
      .then(group => { return res.json(group); })
      .catch(err => console.log('Error: ' + err))
  },

  async destroy(req, res) {
    const { group_id } = req.params;

    await Group.destroy({ where: { id: group_id } })
      .then(group => { return res.json(group); })
      .catch(err => console.log('Error: ' + err));
  }
};
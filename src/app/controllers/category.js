const Sequelize = require('sequelize');
const { Category } = require('../models');

const Op = Sequelize.Op;

module.exports = {
  async index(req, res) {
    const { title, enabled } = req.query;

    await Category.findAll({
      where: {
        title: { [Op.like]: `%${ title }%` },
        [Op.or]: [{
          enabled: { [Op.like]: `%${ enabled }%` }
        }]
      }
    })
      .then(category => { return res.json(category); })
      .catch(err => console.log('Error: ' + err))
  },

  async show(req, res) {
    const { title } = req.query;

    await Category.findOne({
      where: {
        title: { [Op.like]: `%${ title }%` }
      }
    })
      .then(category => { return res.json(category); })
      .catch(err => console.log('Error: ' + err))
  },

  async store(req, res) {
    const { groupId, title } = req.body;

    await Category.findOrCreate({ where: { title }, defaults: { groupId, enabled: 1 } })
      .then(([category, created]) => {
        res.json(category.get({ plain: true }));
        console.log('Created category: ' + created);
      })
      .catch(err => console.log('Error: ' + err))
  },

  async update(req, res) {
    const { category_id } = req.params;
    const { groupId, title, enabled } = req.body;

    await Category.update({ groupId, title, enabled }, { where: { id: category_id } })
      .then(category => { return res.json(category); })
      .catch(err => console.log('Error: ' + err))
  },

  async destroy(req, res) {
    const { category_id } = req.params;

    await Category.destroy({ where: { id: category_id } })
      .then(category => { return res.json(category); })
      .catch(err => console.log('Error: ' + err))
  }
};

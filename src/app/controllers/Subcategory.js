const Sequelize = require('sequelize');
const { Subcategory, Category } = require('../models');

const Op = Sequelize.Op;

module.exports = {
  async index(req, res) {
    const { title, enabled } = req.query;

    await Subcategory.findAll({
      where: {
        title: { [Op.like]: `%${ title }%` },
        [Op.or]: [{
          enabled: { [Op.like]: `%${ enabled }%` }
        }]
      }, 
      include: [Category] 
    })
      .then(subcategory => { return res.json(subcategory); })
      .catch(err => console.log('Error: ' + err))
  },

  async show(req, res) {
    const { title } = req.query;

    await Subcategory.findOne({
      where: {
        title: { [Op.like]: `%${ title }%` }
      }, 
      include: [Category]
    })
      .then(subcategory => { return res.json(subcategory); })
      .catch(err => console.log('Error: ' + err))
  },

  async store(req, res) {
    const { categoryId, title } = req.body;

    await Subcategory.findOrCreate({ where: { title }, defaults: { categoryId, enabled: 1 } })
      .then(([subcategory, created]) => {
        res.json(subcategory.get({ plain: true }));
        console.log('Created subcategory: ' + created);
      })
      .catch(err => console.log('Error: ' + err))
  },

  async update(req, res) {
    const { subcategory_id } = req.params;
    const { categoryId, title, enabled } = req.body;

    await Subcategory.update({ categoryId, title, enabled }, { where: { id: subcategory_id } })
      .then(subcategory => { return res.json(subcategory); })
      .catch(err => console.log('Error: ' + err))
  },

  async destroy(req, res) {
    const { subcategory_id } = req.params;

    await Subcategory.destroy({ where: { id: subcategory_id } })
      .then(subcategory => { return res.json(subcategory); })
      .catch(err => console.log('Error: ' + err))
  }
};
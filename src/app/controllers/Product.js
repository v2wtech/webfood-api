const Sequelize = require('sequelize');
const { Product, Group, Category, Subcategory  } = require('../models');

const Op = Sequelize.Op;

module.exports = {
  async index(req, res) {
    const { title, enabled } = req.query;

    await Product.findAll({
      where: {
        title: { [Op.like]: `%${ title }%` },
        [Op.or]: [{
          enabled: { [Op.like]: `%${ enabled }%` }
        }]
      },
      include: [Group, Category, Subcategory]
    })
      .then(product => { return res.json(product); })
      .catch(err => console.log('Error: ' + err))
  },

  async show(req, res) {
    const { title } = req.query;

    await Product.findOne({
      where: {
        title: { [Op.like]: `%${ title }%` }
      },
      include: [Group, Category, Subcategory]
    })
      .then(product => { return res.json(product); })
      .catch(err => console.log('Error: ' + err))
  },

  async store(req, res) {
    const { title, description, valuePaid, priceSell, groupId, categoryId, subcategoryId } = req.body;

    await Product.findOrCreate({ where: { title }, defaults: { description, valuePaid, priceSell, groupId, categoryId, subcategoryId, enabled: 1 } })
      .then(([product, created]) => {
        res.json(product.get({ plain: true }));
        console.log('Created product: ' + created);
      })
      .catch(err => console.log('Error: ' + err))
  },

  async update(req, res) {
    const { product_id } = req.params;
    const { title, description, valuePaid, priceSell, groupId, categoryId, subcategoryId, enabled } = req.body;

    await Product.update({ title, description, valuePaid, priceSell, groupId, categoryId, subcategoryId, enabled }, { where: { id: product_id } })
      .then(product => { return res.json(product); })
      .catch(err => console.log('Error: ' + err))
  },

  async destroy(req, res) {
    const { product_id } = req.params;

    await Product.destroy({ where: { id: product_id } })
      .then(product => { return res.json(product); })
      .catch(err => console.log('Error: ' + err))
  }
};




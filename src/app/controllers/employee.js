const Sequelize = require('sequelize');
const { Employee } = require('../models');
const { Sanitizer } = require('../../config/sanitizer');

const Op = Sequelize.Op;

module.exports = {
  async index(req, res) {
    const { name, enabled } = req.query;

    await Employee.findAll({
      where: {
        name: { [Op.like]: `%${ name }%` },
        [Op.or]: [{
          enabled: { [Op.like]: `%${ enabled }%` }
        }]
      }
    })
      .then(employee => { return res.json(employee); })
      .catch(err => console.log('Error: ' + err))
  },

  async show(req, res) {
    const { name, user } = req.query;

    await Employee.findOne({
      where: {
        name: { [Op.like]: `%${ name }%` },
        [Op.or]: [{
          user: { [Op.like]: `%${ user }%` }
        }]
      }
    })
      .then(employee => { return res.json(employee); })
      .catch(err => console.log('Error: ' + err))
  },

  async store(req, res) {
    const { name, rg, phone, role, permission, user, password } = req.body;
    
    const sanitizer = new Sanitizer();
    
    await Employee.findOrCreate({
      where: { [Op.or]: [{ rg }, { user }] },
      defaults: {
        name,
        rg,
        phone: sanitizer.verify({ phone }),
        role,
        permission,
        user,
        password,
        enabled: 1
      }
    })
      .then(([employee, created]) => {
        res.json(employee.get({ plain: true }));
        console.log('Created employee: ' + created);
      })
      .catch(err => console.log('Error: ' + err))
  },

  async update(req, res) {
    const { employee_id } = req.params;
    const { name, rg, phone, role, permission, user, password, enabled } = req.body;

    await Employee.update({ name, rg, phone, role, permission, user, password, enabled }, { where: { id: employee_id } })
      .then(employee => { return res.json(employee); })
      .catch(err => console.log('Error: ' + err))
  },

  async destroy(req, res) {
    const { employee_id } = req.params;

    await Employee.destroy({ where: { id: employee_id } })
      .then(employee => { return res.json(employee); })
      .catch(err => console.log('Error: ' + err))
  }
};
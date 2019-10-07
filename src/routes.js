const express = require('express');

const { GroupController }       = require('./app/controllers');
const { CategoryController }    = require('./app/controllers');
const { SubcategoryController } = require('./app/controllers');
const { ProductController }     = require('./app/controllers');
const { EmployeeController }    = require('./app/controllers');
const { ClientController }      = require('./app/controllers');
const { SessionController }     = require('./app/controllers');

const routes = express.Router();

// Group
routes.get('/api/groups', GroupController.index);
routes.get('/api/groups/search', GroupController.show);
routes.post('/api/groups/register', GroupController.store);
routes.put('/api/groups/:group_id', GroupController.update);
routes.delete('/api/groups/:group_id', GroupController.destroy);

// Category
routes.get('/api/categories', CategoryController.index);
routes.get('/api/categories/search', CategoryController.show);
routes.post('/api/categories/register', CategoryController.store);
routes.put('/api/categories/:category_id', CategoryController.update);
routes.delete('/api/categories/:category_id', CategoryController.destroy);

// Subcategory
routes.get('/api/subcategories', SubcategoryController.index);
routes.get('/api/subcategories/search', SubcategoryController.show);
routes.post('/api/subcategories/register', SubcategoryController.store);
routes.put('/api/subcategories/:subcategory_id', SubcategoryController.update);
routes.delete('/api/subcategories/:subcategory_id', SubcategoryController.destroy);

// Product
routes.get('/api/products', ProductController.index);
routes.get('/api/products/search', ProductController.show);
routes.post('/api/products/register', ProductController.store);
routes.put('/api/products/:product_id', ProductController.update);
routes.delete('/api/products/:product_id', ProductController.destroy);

// Employee
routes.get('/api/employees', EmployeeController.index);
routes.get('/api/employees/search', EmployeeController.show);
routes.post('/api/employees/register', EmployeeController.store);
routes.put('/api/employees/:employee_id', EmployeeController.update);
routes.delete('/api/employees/:employee_id', EmployeeController.destroy);

// Client
routes.get('/api/clients', ClientController.index);
routes.get('/api/clients/search', ClientController.show);
routes.post('/api/clients/register', ClientController.store);
routes.put('/api/clients/:client_id', ClientController.update);
routes.delete('/api/clients/:client_id', ClientController.destroy);

// Session
routes.post('/api/sessions', SessionController.store);

module.exports = routes;
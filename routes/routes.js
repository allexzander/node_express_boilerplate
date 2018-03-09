const Routes = require('express').Router();

const SimpleController = require("../controllers/simpleController");

Routes.get('/', SimpleController.greetings);

module.exports = Routes;
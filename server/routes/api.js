const express = require('express')
const router = express.Router()
const users_controller = require('../controllers/users_controller')
const pets_controller = require('../controllers/pets_controller')

router.route('/users')
      .post(users_controller.store)

router.route('/users/:user')
      .get(users_controller.show)

router.route('/users/:user/pets/:pet')
      .put(users_controller.update) // Adds a 'loved' pet to the user

router.route('/pets')
      .post(pets_controller.store)

module.exports = router
const express = require('express')

const locationsController = require('../controllers/locations')

const routes = express.Router()

routes.get('/provinces', locationsController.getProvinces)
routes.get('/province/:id', locationsController.getProvince)
routes.get('/regencies/:id', locationsController.getRegencies)
routes.get('/regency/:id', locationsController.getRegency)
routes.get('/districts/:id', locationsController.getDistricts)
routes.get('/district/:id', locationsController.getDistrict)
routes.get('/villages/:id', locationsController.getVillages)
routes.get('/village/:id', locationsController.getVillage)

module.exports = routes
const express = require('express')
const { obtenerPer } = require('../controllers/PersonasController')
const routes = express.Router()

//IMPORTAR CONTROLADORES
const personasController = require('../controllers/PersonasController')


//GET
routes.get('/',personasController.getPersona)

routes.get('/:id', personasController.obtenerPer)

//POST
routes.post('/', personasController.agregar)

//editar
routes.put('/:id',personasController.editar)

//eliminar
routes.delete('/:id',personasController.eliminar)

module.exports = routes
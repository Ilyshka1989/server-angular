const express = require('express')
const controller = require('../controllers/rewiews')
const router = express.Router()

 router.get('/', controller.getAll)

 router.post('/', controller.create)
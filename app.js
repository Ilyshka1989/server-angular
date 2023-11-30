const express = require('express');
const connectionRoutes = require('./routes/connection')
const rewiewsRoutes = require('./routes/reviews')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use('/api/connection', connectionRoutes)
app.use('/api/rewiew', rewiewsRoutes)

module.exports = app
const express = require('express');
const connectionRoutes = require('./routes/connection')
const rewiewsRoutes = require('./routes/reviews')
const cors = require('cors')
const morgan = require('morgan')
const app = express();
//const mongooseRoutes = require('./routes/mongoose.route')

//app.use('/api/mongoose', mongooseRoutes)
app.use(morgan('dev'))
app.use(cors())
app.use('/api/connection', connectionRoutes)
app.use('/api/rewiew', rewiewsRoutes)

module.exports = app
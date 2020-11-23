const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require('./models/db')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

var generateRouter = require('./routes/generate')
var redirectRouter = require('./routes/redirect')

app.use(express.static('dist'))
app.post('/generate', generateRouter)
app.use('/to', redirectRouter)

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app

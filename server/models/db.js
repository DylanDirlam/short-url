const mongoose = require('mongoose')
const config = require('./../../short-url.config')

mongoose.connect(config.mongodb_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

mongoose.connection.on('connected', function() {
  console.log('Mongoose connection opened.')
})

// If the connection throws an error
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err)
})

require('./Link')

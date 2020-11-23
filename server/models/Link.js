const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
  linkId: {
    type: String,
    index: true,
  },
  linkTo: {
    type: String,
    default: '',
  },
  uses: {
    type: Number,
    default: 0,
  },
  created: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Link', linkSchema)

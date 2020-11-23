const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const crypto = require('crypto')
const config = require('./../../short-url.config')

const Link = mongoose.model('Link')

router.post('/generate', async function(req, res) {
  let id = crypto.randomBytes(3).toString('hex') // Generates a 6 character hexademical string
  const linkTo = req.body.to

  if (!linkTo) {
    res.status(400).send()
  }

  let idIsGood = false
  while (idIsGood === false) {
    // Loop in case it tries to assign a repeat value
    if (!(await Link.findOne({ linkId: id }).exec())) {
      // If no link by that ID is found, then it's available
      idIsGood = true
    }

    const dbLink = await Link.findOne({ linkTo: linkTo }).exec() // Check if an ID has already been assigned to this URL to reuse it
    if (dbLink) {
      idIsGood = true
      id = dbLink.linkId
    }
  }

  Link.create({
    linkId: id,
    linkTo,
  })
    .then(() => {
      const linkFormatted = `${config.app_url}/to/${id}`
      console.log(linkFormatted)
      res.status(200).send({
        linkTo: linkFormatted,
      })
    })
    .catch((err) => {
      res.status(422).send({
        error: err,
      })
    })
})

module.exports = router

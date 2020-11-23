const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Link = mongoose.model('Link')

router.get('/:id', async function(req, res) {
  const id = req.params.id
  if (!id) {
    return res.status(400).send({
      message: 'No link provided',
    })
  }

  const dbLink = await Link.findOne({ linkId: id }).exec()
  if (!dbLink) {
    return res.status(404).redirect('/')
  }

  dbLink.update({ uses: (dbLink.uses += 1) }).exec()
  res.redirect(dbLink.linkTo)
})

module.exports = router

const express = require('express')
const db = require('../db/movie')

// set up file as a stand alone
const router = express.Router()

router.get('/', (req, res) => {
  db.getMovies()
  .then(movies => {
    res.json(movies)
  })
  .catch(err => {
    console.log(err)
    res.setStatus(500).json({error: "something is wrong"})
  })
})

module.exports = router
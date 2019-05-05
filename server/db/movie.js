const connection = require('./connection')

function getMovies(db = connection) {
  return db('movie').select()
}

module.exports = {
  getMovies
}
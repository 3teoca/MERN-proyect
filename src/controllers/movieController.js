const db = require ("../database/models")

const  movieController = {
    list: (req,res) => {
        db.Movies.findAll()
        .then (movies => {
            res.send(movies)
        })
    }
}

module.exports = movieController
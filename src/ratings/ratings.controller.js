const ratings = require("../data/ratings-data")

const ratingExists = (req, res, next) => {
    const ratingId = Number(req.params.ratingId)
    const foundRating = ratings.find((rating) => rating.id === ratingId)
    const notFoundMsg = `Rating id not found: ${ratingId}`
    if (foundRating) {
      res.locals.rating = foundRating
      return next()
    }
    next({ status: 404, message: notFoundMsg, })
  }

const list = (req, res) => {
  let noteId = ""
  if (res.locals.note) noteId = res.locals.note.id
  const byNote = noteId ? (rating) => rating.noteId === noteId : () => true
  res.json({ data: ratings.filter(byNote), }) 
}

function read(req, res) {
    res.json({ data: res.locals.rating });
  }

module.exports = {
  list,
  read: [ratingExists, read]
}
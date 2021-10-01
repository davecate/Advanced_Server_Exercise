const ratings = require("../data/ratings-data")

const list = (req, res) => {
  res.json({ data: ratings })
}

function read(req, res) {
    const ratingId = Number(req.params.ratingId);
    const foundRating = ratings.find((rating) => (rating.id = ratingId));
    res.json({ data: foundRating });
  }

module.exports = {
  list,
  read,
}
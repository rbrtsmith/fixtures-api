exports.getAllAreas = (req, res) => {
  res.send('it works!')
}

exports.getCompetitions = (req, res) => {
  res.send(req.params.id)
}

exports.getMatches = (req, res) => {
  res.send(req.params.id)
}

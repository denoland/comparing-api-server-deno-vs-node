
const express = require('express')
const app = express()
const port = 3000
const data = require('../../data/dinosaurs.json')

app
  .get('/', (req, res) => {
    res.send('Try /api/:dinosaur/')
  })
  .get('/api/', function(req, res) {
    res.send(data)
  })
  .get('/api/:dinosaur/', function(req, res) {
    const dinosaur = req.params.dinosaur.toLowerCase();
    const filtered = data.filter((item) => item['Name'].toLowerCase() === dinosaur)
    if (filtered.length === 0) {
      res.send('No dinosaurs found.')
    } else {
      res.send(filtered[0])
    }
  })

app.listen(port)

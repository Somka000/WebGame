const express = require('express')
const app = express()
const port = 3000

app.use(express.static('publiczne'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/publiczne/logowanie.html')
  })
  
  app.listen(port, () => {
    console.log(`Gra jest na porcie ${port}`)
  })
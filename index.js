const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(morgan('combined'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.redirect('/storybook/index.html')
})

app.listen(8000, () => {
  console.log('Server start at port 8000')
})

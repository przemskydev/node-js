const express = require('express');
const port = process.env.PORT || 3000;

const app = express()

const generateTitle = () => 'NodeJS 2020'

app.set('view engine', 'hbs');
app.get('/', (req, res) => {

  const title = generateTitle();

  res.render('index', {
    pageTitle: title,
    pageBody: 'Hello Node-World!'
  })
})

app.get('/about', (req, res) => {
  res.send('About me :)')
})

app.listen(port)
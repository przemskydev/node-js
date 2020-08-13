const express = require('express');
const port = 3000;

const app = express()

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'NodeJS',
    pageBody: 'Hello Node-World!'
  })
})

app.get('/about', (req, res) => {
  res.send('About me :)')
})

app.listen(port)
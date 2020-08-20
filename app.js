const express = require('express');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
require('dotenv/config')

const app = express();
const DB_URI = process.env.DB_CONNECTION;

const postsRoute = require('./routes/posts.route');
app.use('/posts', postsRoute);


//Routes
app.get('/', (req, res) => res.send('Hello World!'))


//connect to db
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
  if (!error) console.log(`Connection successful...`)
})

app.listen(port)
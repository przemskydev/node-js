const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

//Routes
app.get('/',(req, res)=>res.send('Hello World!'))

app.listen(port)
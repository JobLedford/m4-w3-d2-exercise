'use strict'

const express = require('express');
const helmet = require('helmet');
const app = express();

//Protect header information w/ helmet
app.use(helmet());

//ROUTES
app.get('/', (req,res) => {
    console.group('Route"/"called')
    res.send({ res: 'Sending 200 as response' })
});

app.listen(3000)
console.log('Express app is up and running on port 3000')
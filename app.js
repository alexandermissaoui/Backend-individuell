const express  = require('express');
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'))


app.use('/api/cases', require('./controllers/caseController'))




module.exports = app;

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
require('dotenv').config();


const indexRouter = require('./routes/index-router');
const londonRouter = require('./routes/london-router');
const CaliforniaRouter = require('./routes/cali-router')

app.use(express.static('public'));
/* View Engine */
const ejs = require('ejs');
app.set('view engine', 'ejs');


app.use('/', indexRouter);
app.use('/', londonRouter);
app.use('/', CaliforniaRouter);


app.use(bodyParser.json());

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
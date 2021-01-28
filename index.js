const express = require('express')
const app = express()
const bodyParser = require('body-parser');
require('dotenv').config();

// Importing the landing page router
const indexRouter = require('./routes/index-router');

// Serving static files
app.use(express.static('public'));

/* View Engine */
const ejs = require('ejs');
app.set('view engine', 'ejs');

// Using app.use to configure the middleware used by the routes on each request.
app.use('/', indexRouter);


// Parses any JSON
app.use(bodyParser.json());
// Setting the port variable to be dynamic
let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

// listening on the specified port and logging out a statment to show server is running
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
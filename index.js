
const express = require('express')
let routes = require('./routes/routes.js');
const app = express()
const port = 3000


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'PUT, PATCH,POST, GET, DELETE, OPTIONS');
	next();
});

const bodyParser = require('body-parser');

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

app.listen(port, () => {
  app.use('/',routes);
  console.log(`App listening http://localhost:${port}`)
})

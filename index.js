// Import express
let express = require('express')
// Initialize the app
let app = express();
// Setup server port
var port = process.env.PORT || 8080;
// Import routes
let api_routes = require("./api_routes")

// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/LifeAnalytics');
var db = mongoose.connection;

// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to LifeAnalytics'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running node server on port " + port);
});


// Use Api routes in the App
app.use('/api', api_routes)
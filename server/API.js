const express = require('express'); //Express - Provides a server backend

const compression = require('compression'); //Compression - Automatically compresses data we send
const bodyParser = require('body-parser');  //Body Parser - Allows us to access data in JSON we recieve
const fileUpload = require('express-fileupload');
const morgan = require('morgan') //Morgan - Server Logger

const app = express();

//Use the middleware that we want
app.use(compression());
app.use(bodyParser({ limit: '50mb' }));
app.use(fileUpload());
app.use(morgan('combined'))

// Serve static files from the React app
app.use(express.static('www'));

//Set up route for the url at /api/hello, and send a string as a response.
app.get('/api/hello', (req, res) => {
    res.status(200).send('Hello SATURN');
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile('www/index.html');
});

//Listen for traffic on port 5000
const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);

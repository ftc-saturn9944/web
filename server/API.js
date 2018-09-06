const express = require('express');

const compression = require('compression');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const morgan = require('morgan')

const app = express();

app.use(compression());
app.use(bodyParser({ limit: '50mb' }));
app.use(fileUpload());
app.use(morgan('combined'))

app.use(express.static('www'));

// Serve static files from the React app
app.get('/api/hello', (req, res) => {
    res.status(200).send('Hello SATURN');
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile('www/index.html');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);

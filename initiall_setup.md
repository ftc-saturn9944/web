# Setup instructions for a new API + React project

## Overall project setup
, 
All of this happens in a terminal window. It assumes Node.js is installed.

Check version: `node --version`. Needs to at least 8.

```
cd project
npm init
```
(accept defaults)

Open new folder in vscode

Edit the file called `package.json` to add this:

```json
"scripts": {
    "start": "node index.js",
    "heroku-postbuild": "cd client && npm install && npm run build && mv build ../www"
}
```

Create a folder called `server`.

```
mkdir server
```

Create a new file called `index.js` in the root. Put the following code in it:
```javascript
require('./server/API');
```

## Server setup

In the `server` folder, create a new file called `API.js`. Put this basic code in it:

```javascript
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

// Serve static files from the React app
app.use(express.static('www'));

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
```

This will create a very basic server that understands HTTP GET requests to `/api/hello`. We can use this to test that the server starts ok.

We have to tell Node.js we need all these packages installed.

```
npm install express cors compression body-parser express-fileupload morgan --save
```

From the `project` folder, run the `npm start` command. This will start the server.

## Web application setup

This setup works for React applications. We'll use a scaffolding app called `create-react-app`, which is a Node.js command line application.

Open another command prompt for the client work. Change directory to be inside the project folder:
```
cd project
```

To install it:
`npm install -g create-react-app`

Then create the basic web application:
`create-react-app client`

From the terminal: `cd client`

Back in `vscode`, edit `package.json` and add the following:

```json
"scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js --env=jsdom"
},
"proxy": "http://localhost:5000",
```

Then to start the UI:
```
npm start
```

Now you have a running server and a running web application project. Next. we'll work on the web application to learn about React components.


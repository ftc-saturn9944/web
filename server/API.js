const express = require('express'); //Express - Provides a server backend

const compression = require('compression'); //Compression - Automatically compresses data we send
const bodyParser = require('body-parser');  //Body Parser - Allows us to access data in JSON we recieve
const fileUpload = require('express-fileupload');
const morgan = require('morgan') //Morgan - Server Logger

const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');
const mongo = require('./mongo')();

// This creates a random signature key. This makes sure the signature key changes every time the
// server restarts so if anyone ever stole the key, it'd be useless as soon as we restart the server.
const jwtKey = process.env.NODE_ENV === 'production' ? uuid() : 'saturn';

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

// The login API
app.post('/api/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    // if (username == "test" && password == "test") { //Hardcoded password to use when we don't have a database when testing
    //     // Make a JSON token
    //     let auth = {
    //         iss: "saturn9944",                          // Token Issuer (us)
    //         username: username,                             // User that is using this token
    //         firstname: "Test",
    //         lastname: "Test",
    //         iat: Date.now(),                            // Issued at
    //         exp: Date.now() + 3 * 24 * 60 * 60 * 1000   // Expires after 3 days
    //     };
    //     // By signing the token with our secret signature key, we are sure noone can make their own token.
    //     // Later, we use the key to verify the signature to make sure the tokens are valid.
    //     signedToken = jwt.sign(auth, jwtKey);

    //     // Send the token back to the caller. Then every request they make, they can resend that token back to
    //     // us through the "Authorization" request header and if valid, we know who the user is.
    //     res.status(200).send({ token: signedToken });
    // }
    mongo.getUser(username, password, (user) => {
        if (!user) res.status(401).send();
        else {
            console.log("Callback function called")
            // Make a JSON token
            let auth = {
                iss: "saturn9944",                          // Token Issuer (us)
                username: user.username,                             // User that is using this token
                firstname: user.firstName,
                lastname: user.lastName,
                iat: Date.now(),                            // Issued at
                exp: Date.now() + 3 * 24 * 60 * 60 * 1000   // Expires after 3 days
            };

            // By signing the token with our secret signature key, we are sure noone can make their own token.
            // Later, we use the key to verify the signature to make sure the tokens are valid.
            signedToken = jwt.sign(auth, jwtKey);

            // Send the token back to the caller. Then every request they make, they can resend that token back to
            // us through the "Authorization" request header and if valid, we know who the user is.
            res.status(200).send({ token: signedToken });
        }
    });

    // Very naive implementation for now


});

// Load the submodules
require('./gamestats.js')(app, validateAuthorization);
require('./scouting.js')(app, validateAuthorization);

//Registration info endpoint - takes in student & parent contact information and stores it in a database
app.post("/api/register", (req, res) => {
    let entry = req.body;
    entry.timestamp = Date.now();
    entry.timestampHumanReadable = new Date().toString();
    let err = mongo.addRegistrationInfo(entry, () => {
        res.status(200).send(); //Success callback
    }, (err) => { //Failed callback
        if (err.message == "Duplicate") //Not the best way to do this im sure
            res.status(400).send("duplicate"); //But i needed a way to differentiate between errors
        else if (err.message == "Not Enough Info")
            res.status(400).send("notenoughinfo");
        else
            res.status(500).send();
        console.log(err.message);
    });

});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile('www/index.html');
});

//Listen for traffic on port 5000
const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port} as ${process.env.NODE_ENV === 'production' ? 'LIVE' : 'TEST'} system`);

function validateAuthorization(req) {
    var token = req.get('Authorization');
    if (token === undefined) {
        console.log("Attempt to get to a protected resource with no Auth token");
        return null;
    }
    else {
        if (token.startsWith("Bearer ")) token = token.substring(7);

        try {
            // Decode the token with the signature
            let decoded = jwt.verify(token, jwtKey);
            if (decoded.iss === 'saturn9944') { // Make sure we're the token issuer
                if (decoded.exp < Date.now()) { // Make sure it's not an expired token
                    console.log("Expired token " + decoded.user);
                    return false;
                }
                return decoded;
            }
            else {
                console.log("Attempt to get to a protected resource with an altered Auth token");
                return null;
            }
        } catch (err) {
            var ip = "undefined";
            try {
                ip = req.connection.remoteAddress;
            } catch (ex) {
                console.log(ex);
            }

            console.log(err);
            console.log(token);
            console.log("Attempt to get to a protected resource with an invalid Auth token remote IP: " + ip);
            return null;
        }
    }
}
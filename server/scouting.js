const mongo = require('./mongo')();

module.exports = (app, validateAuthorization) => {
    app.post('/api/getscoutingdata', (req, res) => { //We're using a POST request because we don't want to send the search query in the URL.
        let jwt = validateAuthorization(req);
        if (!jwt) {
            // Bad token, you're out... Fool!
            res.status(403).send();
            return;
        }
        console.log("heck");

        // If we make it this far, we know the user is authenticated so it's safe to proceed.
        // It also returned the jwt token for convenience in case we want it.
        let match = typeof req.body.match != undefined ? req.body.match : false;
        mongo.getScoutingData({ teamName: "Swampbots" }, data => {
            console.log(data);
            if (data.length != 0) {
                console.log(data.length);
                res.status(200).send(data);
            } else {
                res.sendStatus(404);
            }
        });
    });

}
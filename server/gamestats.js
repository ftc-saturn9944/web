const mongo = require('./mongo')();

module.exports = (app, validateAuthorization) => {
    app.get('/api/stats', (req, res) => {
        let jwt = validateAuthorization(req);
        if (!jwt) {
            // Bad token, you're out... Fool!
            res.status(403).send();
            return;
        }

        // If we make it this far, we know the user is authenticated so it's safe to proceed.
        // It also returned the jwt token for convenience in case we want it.

        mongo.getGameStats(data => {
            if (data.length != 0) {
                console.log(data.length);
                res.status(200).send(data);
            } else {
                res.status(404).send({ status: "No data found. There is either no database connected to the server, or there is no data in that database." })
            }
        });
    });

    // Add more APIs for the stats (like POST, etc..) here. This creates modules for various groups of things we want
    // to do and keeps the code small.



    app.post('/api/stats', (req, res) => {
        mongo.addGameStats(req.body, () => {
            res.status(201).send();
        });


    });

}

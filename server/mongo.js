'use strict';

const MongoClient = require('mongodb').MongoClient;

const GAME_STATS = "gamestats";
const USERS = "users";

const Mongo = function () {
    let mongoUrl = process.env.MONGODB_URI;
    if (mongoUrl == null) {
        this.url = "mongodb://localhost:27017/";
        this.dbName = "saturn";
    }
    else {
        const decode = /^(mongodb:\/\/(?:.)*@?(?:[^\/])*)\/(.*)$/.exec(mongoUrl);
        this.url = mongoUrl;
        this.dbName = decode[2];
    }

    console.log(this);
};

Mongo.prototype.getGameStats = function (next) {
    MongoClient.connect(this.url, (err, db) => {
        if (err) throw err;
        var dbo = db.db(this.dbName);
        var query = {};
        dbo.collection(GAME_STATS).find(query).toArray(function (err, result) {
            if (err) throw err;
            db.close();
            next(result);
        });
    });
};

Mongo.prototype.addGameStats = function (data, next) {
    MongoClient.connect(this.url, (err, db) => {
        if (err) throw err;
        var dbo = db.db(this.dbName);
        console.log(data);
        dbo.collection(GAME_STATS).insertOne(data, (err, res) => {
            if (err) throw err;
            db.close();
            next();
        });
    }
    )
};

Mongo.prototype.getUser = function (username, password, next) {
    MongoClient.connect(this.url, (err, db) => {
        if (err) throw err;
        var dbo = db.db(this.dbName);
        var query = { username, password }
        dbo.collection(USERS).findOne(query, (err, res) => {
            if (err) throw err;
            db.close();
            next(res);
        });
    })
};

module.exports = () => {
    return new Mongo();
};

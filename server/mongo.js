const MongoClient = require('mongodb').MongoClient;

const DB = "saturn";
const GAME_STATS = "gamestats";
const USERS = "users";
const url = "mongodb://localhost:27017/";

const Mongo = function() {
}

Mongo.prototype.getGameStats = (next) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db(DB);
        var query = {  };
        dbo.collection(GAME_STATS).find(query).toArray(function (err, result) {
            if (err) throw err;
            db.close();
            next(result);
        });
    });
}
Mongo.prototype.addGameStats = (data, next) => {
    MongoClient.connect(url, (err,db) => {
        if (err) throw err;
        var dbo = db.db(DB);
        console.log(data);
        dbo.collection(GAME_STATS).insertOne(data, (err, res) => {
            if(err) throw err;
            db.close();
            next();
        });
    }
    )}
Mongo.prototype.getUser = (username, password, next) => {
    MongoClient.connect(url, (err,db) => {
        if (err) throw err;
        var dbo = db.db(DB);
        var query = {username, password}
        dbo.collection(USERS).findOne(query, (err, res) => {
            if(err) throw err;
            db.close();
            next(res);
        });
    })
}
module.exports = () => {
    return new Mongo();    
};
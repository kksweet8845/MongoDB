var mongoose = require('mongoose');
const config = require('./config');


var mongo = config.mongodb;
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${mongo.user}:${mongo.password}@${mongo.host}/${mongo.database}`,{
        useNewUrlParser: true
    });

module.exports = {mongoose};

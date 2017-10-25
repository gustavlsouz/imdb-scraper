const Schema = require('mongoose').Schema;

const movie = Schema({
    title: {type: String, required: true}
    ,idImdb: {type: Number, required: true, unique: true}
    ,year: {type: Number}
    ,rating: {type:Number}
    ,ratingCount: {type:String}
    ,originalTitle: {type:String}
    ,duration: {type:String}
    ,director: {type:String}
    ,cast: {type:[String]}
    ,description: {type:String}
    ,genre: {type:[String]}
    ,link: {type:String}
    ,createdAt: {type:String}
    ,top250: {type:Number} //posição caso esteja entre os 250.
});

module.exports = db.model("movie", movie);
const request = require('request');

const strings = require('./../strings');
const titleScraper = require('./../title/scraper');
const MovieModel = require('./../../models/movie');

const walker = (dataObj) => {
    let number = dataObj.number
    , position = dataObj.position || null
    , link = 'http://www.imdb.com/title/tt' + strings.pad(number, 7, "0") + '/?ref_=rvi_tt';

    if (typeof number === "undefined") {
        console.log(new Error("Parâmetro dataObj.number não especificado."));
    } else {
        request(link, function (error, response, html) {
            if (!error && response.statusCode == 200) {        
                titleScraper.makeTitleObject({"link": link, "number": number, "position": position}, html, function(movie) {
                    let newMovie = MovieModel(movie);
                    newMovie.save(function(err) {
                        if (err) { console.log(err); }
                        else {
                            console.log("saved:", movie.title, " : ", movie.year, " : ", number);
                        }
                    });
                });
        
            } else if (error) {
                console.log("ERRO: number: ", number, "link:", link, "erro:", String(error).slice(0,35));
            }
        });
    }
    console.log("requisitando:", link);

};

module.exports = walker;
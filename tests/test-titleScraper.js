const request = require('request');

const titleScraper = require('./../lib/titleScraper');

let link = "http://www.imdb.com/title/tt0120737/?ref_=rvi_tt"
, number = 0120737
;

request(link, function (error, response, html) {
    if (!error && response.statusCode == 200) {        
        titleScraper.makeTitleObject({"link": link, "number": number}, html, function(movie) {
            console.log(movie);
        });

    } else if (error) {
        console.log("ERRO: number: ", number);
        console.log("ERRO LINK: ",link);
        console.log(String(error).slice(0,35));
    }
});

const cheerio = require('cheerio');
const request = require('request');

const utils = require('./utils');

let link = "http://www.imdb.com/chart/top?ref_=nv_mv_250_6";

request(link, function (error, response, html) {
    console.log("request realizado.");
    if (error || response.statusCode !== 200) {
        console.log("ERRO:", String(error).slice(0,35));
        console.log("Status Code", response.statusCode);
    } else {
        let $ = cheerio.load(html);

        $('tbody.lister-list tr td.titleColumn').each(function(idx, el) {
            let titleTarget = $(el).children().text();
            console.log("\n\n", titleTarget);
            let linkTarget = $(el).children().attr("href");
            // let indexInit = linkTarget.indexOf("/tt") +3;
            // let id = linkTarget.substring(indexInit, indexInit+7);
            let id = utils.getIdFromLink(linkTarget);
            console.log(linkTarget);
            console.log("id:",id);
        });
    }

});
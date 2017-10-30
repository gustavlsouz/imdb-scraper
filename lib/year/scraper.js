// const request = require('request');
const cheerio = require('cheerio');

const utils = require('./../utils');


// http://www.imdb.com/search/title?year=1994,1994&page=1&ref_=adv_nxt

const readYearPage = (html, callback) => {
    // let linkTarget = "http://www.imdb.com/search/title?year=" + 
    // initialYear + "," + initialYear + "&page=" + initialPage + "&ref_=adv_nxt";
    let time = 0;
    let interval = 2.8;
    let $ = cheerio.load(html);
    let idList = [];

    $('h3.lister-item-header a').each((idx, el) => {
        let semiLink = $(el).attr('href');
        let idImdb = utils.getIdFromLink(semiLink);
        idList.push(+idImdb);
        // time = +(time + interval).toFixed(2);
    });
    
    callback(idList);
};

exports.readYearPage = readYearPage;
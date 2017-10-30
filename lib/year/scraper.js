// const request = require('request');
const cheerio = require('cheerio');

const utils = require('./../utils');

const readYearPage = (html, callback) => {
    let time = 0;
    let interval = 2.8;
    let $ = cheerio.load(html);
    let idList = [];

    $('h3.lister-item-header a').each((idx, el) => {
        let semiLink = $(el).attr('href');
        let idImdb = utils.getIdFromLink(semiLink);
        idList.push(+idImdb);
    });
    
    callback(idList);
};

exports.readYearPage = readYearPage;
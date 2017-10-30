const request = require('request');

const yearScraper = require('./scraper');
const timetools = require('./../timetools');
const utils = require('./../utils');
const titleWalker = require('./../title/walker');

const yearWalker = (userParams) => {
    var initialYear = userParams.iy
    , finalYear = userParams.fy 
    , initialPage = userParams.ip 
    , finalPage = userParams.fp 
    , timeToWait = userParams.time
    ,interval = userParams.interval
    ;
    
    let timeForPage = 0
    , pageInterval = userParams.time * 50
    ;
    
    for (let year = initialYear; year<=finalYear; year++) {
        for (let page = initialPage; page <= finalPage; page++) {
            timetools.sleep(timeForPage).then(() => {
                let linkTarget = "http://www.imdb.com/search/title?year=" + 
                year + "," + year + "&page=" + page + "&ref_=adv_nxt";
                
                console.log(linkTarget);
                
                request(linkTarget, (err, res, html) => {
                    if (err || res.statusCode !== 200) {
                        console.log(`Erro ao requisitar página ${linkTarget}`);
                        process.exit();
                    } else {
                        yearScraper.readYearPage(html, (semiLink, time) => {
                            let number = utils.getIdFromLink(semiLink);
                            let tempoTotal = timeToWait + time;
                            console.log(semiLink, "tempo total:", tempoTotal);
                            timetools.sleep( tempoTotal ).then(() => {
                                titleWalker({"number": number});
                            });
                        });
                    }
                })
            });
            timeForPage+=pageInterval;
        }
        timeToWait = +(timeToWait+interval).toFixed(2);
    }
};

module.exports = yearWalker;
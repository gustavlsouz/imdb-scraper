const mongoose = require('mongoose');
const request = require('request');
const userParams = require('minimist')(process.argv.slice(2));
console.log(userParams);
global.db = mongoose
.createConnection('mongodb://localhost/imdb-scraper');

const timetools = require('./lib/timetools');
const walker = require('./lib/title/walker');
const topList = require('./lib/top250/top250List');
const yearScraper = require('./lib/year/scraper');
const utils = require('./lib/utils');

const main = () => {
    let timeToWait, interval

    if (userParams.time > 0.2) {
        timeToWait = +userParams.time
    } else {
        timeToWait = 1;
    }

    interval = timeToWait;
    
    if (userParams.top250) {
        topList.getidsListObj((err, idsListObj) => {
            if (err) {
                console.log(err);
            } else {
                idsListObj.forEach((idMovie) => {
                    timetools.sleep(timeToWait).then(() => {
                        walker({"number": idMovie.id, "position": idMovie.position});
                    });
                    timeToWait = +(timeToWait+interval).toFixed(2);
                });
            }
        });
    } else if (userParams.inicio) {
        let inicio = userParams.inicio
        , quant = userParams.quant
        , ate = inicio+quant
        ;
        
        console.log("inicio:", inicio, "quant:", quant, "ate:", ate);
        
        for (let number = inicio; number < ate; number++) {
            timetools.sleep(timeToWait).then(() => {
                walker({"number": number});
            });
            timeToWait = +(timeToWait+interval).toFixed(2);
        }

    } else {
        let params = yearScraper.checkParams(userParams.year, userParams.pages)
        , initialYear = params.initialYear
        , finalYear = params.finalYear
        , initialPage = params.initialPage
        , finalPage = params.finalPage

        console.log(params);

        let timeForPage = 0
        , pageInterval = 60
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
                                    walker({"number": number});
                                });
                            });
                        }
                    })
                });
                timeForPage+=pageInterval;
            }
            timeToWait = +(timeToWait+interval).toFixed(2);
        }
    }
};
    

const checkParams = function(){
    if (    (userParams.inicio && userParams.quant) || 
            userParams.top250 ||
            ( (typeof userParams.year in {"string": null, "number": null} ) && (typeof userParams.pages in {"string": null, "number": null}) )
        ) {
        main();
    } else {
        console.log(`Parâmetros:\n\t--inicio <numero inicial>\n\t--quant <quantidade de links para percorrer>`);
        console.log(`\t--time [opcional] <intercalo em segundos>`);
        console.log(`\n\t--top250 para lista dos 250 melhores filmes`);
        console.log(`\n\t--year <ano ou intervalo> --pages <[1-9]> \n\t\t-> ex: --year "2011-2017" --pages 3`);
        mongoose.disconnect();
        process.exit();
    }
}();

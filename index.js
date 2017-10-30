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
const yearWalker = require('./lib/year/walker');

const main = () => {
    var timeToWait, interval;

    if (userParams.time > 0.2) {
        timeToWait = +userParams.time
    } else {
        timeToWait = 1;
        userParams.time = 1;
    }
    
    userParams.interval = timeToWait
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
        yearWalker(userParams);
    }
};
    

const checkParams = function(){
    if (    (userParams.inicio && userParams.quant) || 
            userParams.top250 ||
            ( (typeof userParams.iy === "number" ) && 
                    (typeof userParams.fy === "number") && 
                    (typeof userParams.ip === "number") && 
                    (typeof userParams.fp === "number") 
            )
        ) {
        main();
    } else {
        console.log(`Parâmetros:\n\t--inicio <numero inicial>\n\t--quant <quantidade de links para percorrer>`);
        console.log(`\t--time [opcional] <intervalo em segundos>`);
        console.log(`\n\t--top250 para lista dos 250 melhores filmes`);
        console.log(`\n\t--iy <ano inicial> --fy <ano final>\n\t--ip <páginal inicial> --fp <página final>\n\t\t-> ex: --iy 2011 --fy 2017 --ip 3 --fp 5`);
        mongoose.disconnect();
        process.exit();
    }
}();

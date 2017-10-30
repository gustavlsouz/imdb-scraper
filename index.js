const mongoose = require('mongoose');
const userParams = require('minimist')(process.argv.slice(2));

global.db = mongoose
.createConnection('mongodb://localhost/imdb-scraper');

const yearWalker = require('./lib/year/walker');
const top250Walker = require('./lib/top250/walker');
const intervalWalker = require('./lib/title/interval');

const main = () => {
    if (userParams.top250) {
        top250Walker(userParams);
    } else if (userParams.inicio) {
        intervalWalker(userParams);
    } else {
        yearWalker(userParams);
    }
};

const checkParams = function(){
    if (    (typeof userParams.inicio === "number" && typeof userParams.quant === "number") || 
            typeof userParams.top250 === "boolean" ||
            ( (typeof userParams.iy === "number" ) && 
                    (typeof userParams.fy === "number") && 
                    (typeof userParams.ip === "number") && 
                    (typeof userParams.fp === "number") 
            )
        ) {

        if (!userParams.time) {
            userParams.time = 1;
        } else if (userParams.time < 0.2) {
            userParams.time = 0.2;
        }
        
        userParams.interval = userParams.time;
        main();
    } else {
        console.log(`Parâmetros:\n\t--inicio <numero inicial>\n\t--quant <quantidade de links para percorrer>\n\t\t-> ex: node index.js --inicio 55000 --quant 500`);
        console.log(`\t--time [opcional] <intervalo em segundos>`);
        console.log(`\n\t--top250 para lista dos 250 melhores filmes\n\t\t-> node index.js --top250`);
        console.log(`\n\t--iy <ano inicial> --fy <ano final>\n\t--ip <páginal inicial> --fp <página final>\n\t\t-> ex: --iy 2011 --fy 2017 --ip 3 --fp 5`);
        mongoose.disconnect();
        process.exit();
    }
}();

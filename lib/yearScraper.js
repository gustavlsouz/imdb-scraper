// const request = require('request');
const cheerio = require('cheerio');

// const walker = require('./walker');

// http://www.imdb.com/search/title?year=1994,1994&page=1&ref_=adv_nxt

const readYearPage = (html, callback) => {
    // let linkTarget = "http://www.imdb.com/search/title?year=" + 
    // initialYear + "," + initialYear + "&page=" + initialPage + "&ref_=adv_nxt";
    let time = 0;
    let interval = 2.8;
    let $ = cheerio.load(html);
    $('h3.lister-item-header a').each((idx, el) => {
        let semiLink = $(el).attr('href');
        // console.log(semiLink);
        callback(semiLink, time);
        time = +(time + interval).toFixed(2);
    });
    
};

const validation = (data, minLength, maxLength) => {
    let initialData
    , finalData;

    /* pela validação em index.js só pode ser number ou string */
    if (typeof data === "string" && (data.length === minLength || data.length === maxLength) ) { 

        if (data.indexOf("-") < 0) {
            initialData = +data;
            finalData = +data;

        } else if (data.indexOf("-") === 4) {
            data = data.split("-");
            initialData = +data.shift();
            finalData = +data.shift();
            
        } else if (data.indexOf("-") !== 4) {
            console.log(new Error(`Formatação do(s) ano(s) deve ser: AAAA ou AAAA-AAAA de ano mais antigo para mais recente.
                        Formatação de páginas deve ser de 1 a 9
                        ex: --pages 9 ou --pages "1-3"`));
            process.exit();
        }

    } else {
        initialData = data;
        finalData = data;
    }

    if (initialData < 1800 || finalData < 1800) {
        console.log(new Error(`Data inferior a 1800`));
        process.exit();
    }

    return {"initialData": initialData, "finalData": finalData};
};


const checkParams = (year, pages, callback) => {

    let initialPage = +pages[0]
    , finalPage = +pages[2]
    ;

    year = validation(year, 4, 9);
    
    let initialYear = year.initialData
    , finalYear = year.finalData
    ;
    

    return {
        "initialYear": initialYear,
        "finalYear": finalYear,
        "initialPage": initialPage,
        "finalPage": finalPage
    };
    
};

exports.readYearPage = readYearPage;
exports.checkParams = checkParams;
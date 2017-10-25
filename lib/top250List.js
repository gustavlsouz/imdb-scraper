const cheerio = require('cheerio');
const request = require('request');

const getidsListObj = (callback) => {
    let linkTop250 = "http://www.imdb.com/chart/top?ref_=nv_mv_250_6";
    request(linkTop250, function (error, response, html) {
        console.log(`request de ${linkTop250} realizado.`);
        if (error || response.statusCode !== 200) {
            console.log("Status Code para link top 250:", response.statusCode);
            callback(error, null);
        } else {
            let $ = cheerio.load(html)
            , idsListObj = [];
            
            $('tbody.lister-list tr td.titleColumn span.secondaryInfo').remove();

            $('tbody.lister-list tr td.titleColumn').each(function(idx, el) {
                let fullText = $(el).text().trim()
                , fim = fullText.indexOf(".")
                , position = fullText.substring(0,fim)
                ;
                
                let linkTarget = $(el).children().attr("href");
                let indexInit = linkTarget.indexOf("/tt") +3;
                let id = linkTarget.substring(indexInit, indexInit+7);

                idsListObj.push({"id": id, "position": position});
            });
            callback(null, idsListObj);
        }
    
    });
};

exports.getidsListObj = getidsListObj;
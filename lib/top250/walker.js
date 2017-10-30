const top250Scraper = require('./scraper');
const timetools = require('./../timetools');
const titleWalker = require('./../title/walker');

const top250Walker = (userParams) => {
    let timeToWait = userParams.time
    interval = timeToWait;

    top250Scraper.getIdsListObj((err, idsListObj) => {
        if (err) {
            console.log(err);
        } else {
            idsListObj.forEach((idMovie) => {
                timetools.sleep(timeToWait).then(() => {
                    titleWalker({"number": idMovie.id, "position": idMovie.position});
                });
                timeToWait = +(timeToWait+interval).toFixed(2);
            });
        }
    });
};

module.exports = top250Walker;
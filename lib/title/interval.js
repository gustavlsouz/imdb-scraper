const timetools = require('./../timetools');
const titleWalker = require('./walker');

const intervalWalker = (userParams) => {
    let timeToWait = userParams.time
    , interval = timeToWait
    , inicio = userParams.inicio
    , quant = userParams.quant
    , ate = inicio+quant
    ;
    
    console.log("inicio:", inicio, "quant:", quant, "ate:", ate);
    
    for (let number = inicio; number < ate; number++) {
        timetools.sleep(timeToWait).then(() => {
            titleWalker({"number": number});
        });
        timeToWait = +(timeToWait+interval).toFixed(2);
    }

};

module.exports = intervalWalker;
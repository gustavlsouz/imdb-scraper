const sleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, Math.ceil(Math.random()*time));
        // setTimeout(resolve, Math.ceil(time));
    });
}

let lista = [1,2,3,4,5,6,7,8,9,0];

lista.forEach((el, idx) => {
    sleep(5000).then(() => { console.log(idx)});
});
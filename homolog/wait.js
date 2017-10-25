const sleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, Math.ceil(time));
        // setTimeout(resolve, Math.ceil(time));
    });
}

let lista = [1,2,3,4,5,6,7,8,9,0];

lista.forEach((el, idx) => {
    sleep(idx*1000).then(() => { console.log(el)});
});

console.log("for concluído.");
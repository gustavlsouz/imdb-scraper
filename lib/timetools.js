exports.sleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000*time);
    });
};

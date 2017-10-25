exports.getIdFromLink = (linkTarget) => {
    let indexInit = linkTarget.indexOf("/tt") +3;
    let id = linkTarget.substring(indexInit, indexInit+7);
    return id;
}
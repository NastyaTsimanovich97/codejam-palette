module.exports = function coords(clientX,clientY){
    let x = clientX - 495;
    let y = clientY - 140;
    let coord=[x, y];
    return coord.join(',');
}
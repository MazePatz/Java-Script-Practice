const findFactorial = (x) => {
    let divideBy = 1;
    let counter = 0;
    while (x % divideBy === 0) {
        x = x / divideBy;
        divideBy++
        counter++
        if (x > 1) {
            continue;
        } else if (x === 1) {
            return counter;
        }
    }
    if (x != 1) {
       return "None"
    }
}

module.exports = {findFactorial}
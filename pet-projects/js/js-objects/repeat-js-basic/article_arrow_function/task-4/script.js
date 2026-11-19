'use strict';

/*const double = n => n * 2;

console.log(double(5));*/

/*const double = n => {
    return n * 2;
}

console.log(double(5));*/

const evaluateScore = (score) => {
    let result;
    if (score >= 50) {
        result = 'Passed';
    }
    else {
        result = 'Failed';
    }
    return result;
}

console.log(evaluateScore(55));

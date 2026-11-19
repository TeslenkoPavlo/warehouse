'use strict';

// callback функція
function calculate(a, b, action) {
    return action(a, b);
}

/*анонімні функції, тому що не вказується
* їхня назва при виклику їх
* */
console.log(calculate(10, 5,
    function(a, b) {return a + b; }));
/*console.log(calculate(10, 5, (a, b) => a + b));
console.log(calculate(10, 5, (a, b) => a * b));*/

/*
* функція action анонімна, тому що вона працює лише
* всередині функції, її не можна викликати за межами
* функції calculate
* */

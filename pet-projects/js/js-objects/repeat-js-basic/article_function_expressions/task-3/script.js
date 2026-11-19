'use strict';

/*
* function declaration виконається успішно
* оскільки рішій джс обробляє функцію
* під час ініціалізації ще до інтерпретатора
* */
console.log(sum(5, 5));

function sum(a, b) {
    return a + b;
}


console.log(multiply(5, 5));


/*
* function expression ініціалізується лише
* під час дожодження інтерпретатора до
* цього рядка тобто функції тому викликати раніше
* цю функцію неможливо 
* */
let multiply = function(a, b) {
    return a * b;
}

'use strict';

const isEven = num => num % 2 === 0;

const sayGoodbye = () => console.log('Bye!');

function processNumber(number, action) {
    return action(number);
}

console.log(processNumber(10, (number) => number * 3));

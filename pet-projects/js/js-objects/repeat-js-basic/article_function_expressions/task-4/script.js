'use strict';

let age = 20;
let welcome;

if (age >= 18) {
    welcome = function() {
        return 'Access is confirmed';
    };
}
else{
    welcome = function() {
        return 'Access is canceled';
    };
}

console.log(welcome());

/*
* якщо function declaration всередині if else
* то буде помилка тому що функцію не можна
* буде викликати за межами if else в строгому режимі
* */

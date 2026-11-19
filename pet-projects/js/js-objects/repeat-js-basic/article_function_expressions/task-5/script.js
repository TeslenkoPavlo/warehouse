'use strict';

/*
* 1. використаю function declaration
* тому що функція як вираз не можна використовувати
* до того моменту, як інтерпретатор її прочитає
* а оскільки функція буде в самому кінці файлу
* тому однозначно треба використати функцію
* декларовану
* */

let button = 'save';
let handleAction = function() {
    if (button === 'save') return 'save';
    return 'delete';
};

console.log(handleAction());

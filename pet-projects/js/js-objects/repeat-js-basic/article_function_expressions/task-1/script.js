'use strict';

let sayHi = function(name) {
    console.log(`Hi, ${name}!`);
}

let greeting = sayHi;

sayHi('pavlo');
greeting('anna');

/*
* у другого випадку скопіюється код функції
* */

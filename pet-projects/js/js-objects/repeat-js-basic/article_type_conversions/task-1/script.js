'use strict';

// повертає string тобто слова true та null
console.log(String(true)); // true
console.log(String(null)); // null


console.log(Number("    123    ")); // 123
console.log(Number('123z')); // NaN
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

/*
* null поверне число 0 оскільки нічого це нуль
* undefined поверне NaN оскільки не визначене значення це
* не число
* */

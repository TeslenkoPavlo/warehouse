"use strict";

// console.log('1');

// alert('I am JavaScript');

// alert('Hello')
// alert('World')

// alert(3 +
// 1
// + 2);
//
// alert('Hello');
//
// [1, 2].forEach(alert);

// Цей коментар займає весь
// рядок
// alert('Hello');

// Цей коментар міститься
// після інструкції
// alert('World');

/*Приклад багаторядкового
* коментаря
*/
/*alert('Hello');
alert('World');*/

/* Закоментований код
* alert('Hello');
* */
// alert('World');

// let age = 23;
// console.log(age);

// let message;
//
// // Збереження рядка привіт
// // у змінній message
// message = 'Hello!';

/*let message = 'Hello!';

// показує вміст змінної
alert(message);*/

/*let user = 'Ivan',
    age = 25,
    message = 'Hello';*/

/*let user = 'Ivan';
let age = 25;
let message = 'Hello';*/

/*let user = 'Ivan',
    age = 25,
    message = 'Hello';*/

/*
let user = 'Ivan'
    , age = 25
    , message = 'Hello';
*/

// var message = "Hello";

/*let message;

message = "Hello";

// значення змінено
message = "World!";

alert(message);*/

/*
let hello = "Hello World!";

let message;

message = hello;

alert(hello);
alert(message);

let message_ = "this";

let message_ = 'that';*/

/*let userName;

let test123;*/

// можна так оформлювати змінні
/*let $ =1;
let _ = 2;

alert($ + _);*/

// не може змінна починатсия
// з цифри
/*let 1a;

// дефіс не допустимий в імені
let my-name;*/

/*Змінні з іменами apple
та APPLE - це дві різні
змінні*/

// можна використовувати не латинскі букви

// let привіт = "привіт";

/*є слова, які не можна використовувати
як назви змінних*/

// let, class, return, function

// let зарезервоване слово
// let let = 3;

// return зарезервоване слово
// let return = 4;

// num = 5;

/*const myBirthday = '05.12.2006';

myBirthDay = '04.11.2005';*/


/*const COLOR_RED = '#F00';
const COLOR_GREEN = '#0F0';
const COLOR_BLUE = '#00F';
const COLOR_ORANGE = '#FF7F00';

let color = COLOR_ORANGE;
alert(color);*/

/*
let admin,
    name;

name = 'Ivan';

admin = name;

alert(admin);*/

/*let outPlanetName = 'Earth';

let currentUser;*/


/*let message = 'Hello';
message = 123;*/

// type number

// let num = 123;
// num = 12.242;

// infinity
/*alert(1 / 0);

alert(Infinity);*/

// NaN, not a number
// alert('not' / 2);

// будь-яка подальша операція з NaN повертає NaN

// NaN
/*alert(NaN + 1);
alert(3 *NaN);
alert('not' / 2 -1);*/

// output 1
// alert(NaN ** 0);

/*console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

console.log(NaN);*/

/*const BigInt = 1111111111111111111111111111111111111
11111111111111111111111111111111111
111111111111111111n;*/

/*let str = 'Hello';
let str2 = "hello";
// Зворотні лапки
let phrase = `phrase ${str}`;*/

/*let name= 'name1';

// output name1
console.log(`Hello, ${name}!`);

// output 3
console.log(`result: ${1 + 2}`);*/

// Немає типу char є тільки тип string

/*let nameFiledChecked = true;
let ageFieldChecked = false;

// Логічне значення можна отримати як результат порівняння
let isGreater = 4 > 1;

console.log(isGreater);*/

/*// null - нічого, невідоме значення
let age = null;*/

/*let age;
 console.log(age);*/

/*let age = 100;
age = undefined;

console.log(age);*/

/*typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)*/

/*let num;

console.log(typeof null);*/

/*let name = 'pavlo';

console.log(`hello ${1}`);

console.log(`hello ${"name"}`);

console.log(`hello ${name}`);*/

/*// Модульне вікно
alert('Hello');*/

/*

prompt приймає два аргумента:

result = prompt(title, [default]);

Вона показує модальне вікно з текстовим повідомленням, полем,
куди відвідувач може ввести текст, та кнопками ОК/Скасувати.

title - текст, який буде відображатися для відвідувача

default - необов'язковий другий параметр,
початкове значення для поля введення тексту

[...] - означає, що параметр не є обов'язковим

*/

/*let age = prompt('How old are you?', 100);

alert(`You are ${age}`);*/

/*confirm

result = confirm(question);
Функція confirm показує модальне вікно з питанням question та двома кнопками: ОК та
Скасувати.
Результат: true, якщо натиснути кнопку OK, інакше — false.*/

/*let isBoss = confirm('Are you Boss?');

alert(isBoss);

console.log(isBoss);*/

/*let name = prompt('whats your name?');

alert(name);*/

/*

Перетворення на рядок

let value = true;
alert(typeof value); // boolean

value = String(value);
alert(typeof value); // string*/

// Перетворення на число

// 3, рядки перетворюються на числа
// alert('6' / '2');

/*let str = "123";

alert(typeof str); // string

let num = Number(str); // num 123

alert(typeof num); // number

let age = Number('text');

alert(age); // NaN, помилка перетворення

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (помилка читання числа на місці символу "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0*/

/*alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("вітаю") ); // true
alert( Boolean("") ); // false

// будь-які не пусті рядки є true

alert(Boolean("0")); // true
alert(Boolean(' ')); // true*/

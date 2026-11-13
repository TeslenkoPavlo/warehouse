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

//  можна все що завгодно підносити до нульового степеня і поверне 1
// alert(undefined ** 0);

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

/*let age = confirm('Are you 19 years old?');

console.log(typeof age, age);*/

/*let isBoss = confirm('Are you Boss?');

alert(isBoss);

console.log(isBoss);*/

/*let name = prompt('whats your name?');

alert(name);*/


/*// Перетворення на рядок

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

/*// Операнд - це те, до чого застосовуються оператори
// Наприклад, у множині 5 * 2 є два операнда:
// лівий операнд 5, і правий операнд 2. Іноді їх
// називають "аргументи", а не 'операндами'
// Оператор є унарним, якщо він має один операнд.
// Наприклад, унарне заперечення - змінює знак числа:

let x = 1;
x = -x;
console.log(x);

// Оператор є бінарним, якщо він має два опернанди
// Наприклад, оператор мінус можна використовувати
// та у бінарній формі:

let x = 1, y = 3;

alert(y - x);

// Ми маємо
// унарний оператор -> тільки один операнд
// бінарний оператор -> тільки два операнда*/

/*console.log(8 % 3);
console.log(2 ** 2);
console.log(4 ** (1/2));

let s = "my_" + "string";
console.log(s);
console.log('2' + 1);
console.log('6' / '2');
// унарний + перетворить значення на цифри
console.log(+true);
console.log(+"");

let apples = "2";
let oranges = "3";

console.log(+apples + +oranges);

let a, b, c;

a = b = c = 2 + 2;

console.log(a);
console.log(b);
console.log(c);

let counter = 2;
counter++;
console.log(counter);

let counter2 = 2;
counter2--;
console.log(counter2);*/

// щоб використовувати значення
// префіксна форма ++counter щоб використовувати нове збільшене значення


/*// префіксна форма, буде обчислено нове збільшене значення
let counter = 1;
console.log(2 * ++counter);


// постфіксній формі не буде використано збільшене значення
let counter2 = 1;
console.log(2 * counter2++);


// Тут обчислюється перший вираз 1 + 2 і його результат викидається. Потім
// обчислюється 3 + 4 і повертається як результа
let a = (1+2, 3+4);

console.log(a);*/

// три операції в одному рядку
/*
for (a = 1, b = 3, c = a * b; a < 10; a++) {
...
}*/

/*
let a = 1, b = 1;

alert( ++a ); // 2, префіксна форма повертає нове значення
alert( b++ ); // 1, постфіксна форма повертає старе значення*/

/*
let a = 2;

let x = 1 + (a *= 2);*/

/*let a = prompt("Перше число?", 1);
let b = prompt("Друге число?", 2);

alert(+a + +b); // 12*/

// console.log('bd' >'ab');

/*let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!*/

// операнди різних типів перетворюються оператором
// порівняння == на числа

/*Є також оператор строгої нерівності !==, аналогічний до !=.

Оператор строгої рівності довше писати,
проте він робить код більш зрозумілим і
залишає менше місця для помилок.*/

/*console.log(null === undefined); // false

console.log(null == undefined); // true*/

// якщо конвертувати null в число, то буде 0
// якщо конвертувати undefined в число, то буде NaN
//

/*
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true*/

/*let title = prompt('Яка “офіційна” назва JavaScript?', '');

if (title == 'ECMAScript') {
    alert('Correctly!');
}
else {
    alert('Ви не знаєте? ECMAScript!');
}*/

/*let num = prompt('Write your number:');

if (num > 1) {
    alert(1);
}
else if (num < 0){
    alert(-1);
}
else {
    alert(0);
}*/

/*let a, b;
a = 1;
b = 1;

let result = (a + b < 4) ? 'Down' : 'Up';
alert(result);*/

/*let message = (login == 'Працівник') ? 'Привіт' :
    (login == 'Директор') ? 'Вітаю' :
        (login == '') ? 'Немає логіну' :
            '';*/

// alert( undefined || null || 0 );

/*if (age <= 14 && age => 90) {

}*/

/*
if (!(age => 14 && age <= 90)) {

}
*/

/*if (age < 14 || age > 90)*/

/*let user;

// перевірка чи значення null/undefiend
alert(user ?? 'Anonim');*/



// Цикли: while i for



/*let i = 0;

// виводить значення 0 1 2
// одне виконання циклу називається ітерацією
while(i < 3) {
    console.log(i);
    i++;
}*/

/*// while(i != 0) ==> while(i)
let i = 3;
while(i) {
    console.log(i);
    i--;
}*/

/*// Якщо тіло має тільки одну операцію
// можемо пропустити {}
let i = 3;
while (i) console.log(i--);*/


/*// do {} while() виконається хоча б один раз незалежно від умови
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 3);*/

/*
*Початок* виконання
→ (Якщо *умова* == true → виконати тіло і виконати крок)
→ (Якщо *умова* == true → виконати тіло і виконати крок)
→ (Якщо *умова* == true → виконати тіло і виконати крок)
→ ...*/


/*// вбудовані змінні доступні лише всередині циклу
for (let i = 0; i < 3; i++) {
    console.log(i);
}*/

/*let i = 0;

// використовуємо існуючу змінну
for (i = 0; i < 3; i++) {
    console.log(i); // 0 1 2
}

// 3
// зміна доступна, тому що вона оголошена поза циклом
console.log(i);*/

/*// оголошена змінна та присвоєне значення
let i = 0;

// немає в необхідності в початку
for (; i < 3; i++) {
    console.log(i);
}*/

/*// можемо прибрати частинку крок

let i = 0;
for (; i < 3 ;) {
    console.log(i++);
}

// Це робить цикл ідентичним до while(i < 3)*/

// вічний цикл
/*let i = 0;
for (;;) {
    console.log(i++);
}*/


/*// код працює доти, поки вводяться числа, як тільки
// користувач перестає їх водити, то
// код завершується директивою break і виводить суму чисел
let sum = 0;

while (true) {
    let value = +prompt("Write numbers", '');

    // скасовує ведення або передається порожній рядок
    if(!value) break;

    sum += value;
}

console.log('Sum:' + sum);*/


// вивести лише непарні значення
/*for (let i = 0; i < 10; i++) {

    // якщо умова вірна, тоді пропускаємо решту
    // тіла циклу і починаємо з наступної інтеграції
    if (i % 2 == 0) continue;

    console.log(i);
}*/

/*for (let i = 0; i < 10; i++) {

    if ( i % 2 ) {
        console.log(i);
    }
}*/

// break/continue -> не можуть
// використовуватися
// з тернарним оператором ?

/*let i = 0;

for (; i < 10; i++) {

    /!*if (i > 5) {
        console.log(i);
    }
    else {
        continue;
    }*!/

    // error
    /!*(i > 5) ? console.log(i) : continue;*!/

}*/


// мітка для цикла
/*outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input =
            prompt(`Значення в координатах (${i}, ${j})`, '');

        // якщо скасувати або порожній рядок, то вихід з обох циклів
        if (!input) break outer;
    }
}

console.log('all right');*/

/*// мітку можна ставити в новому рядку
outer:
for (let i = 0; i < 3; i++) {

}*/

/*break label; // стрибнути в мітку label нижче (не спрацює)

label: for (...)*/

/*
label: {
    // ...
    break label; // працює
    // ...
}*/

/*

    while -> умова перевіряється перед кожною ітерацією
    do..while -> умова перевіряється після кожної ітерації
    for(;;) -> умова перевіряється перед кожною ітерацією.
    Можна додатково налаштувати

    для використання безкінечного циклу while(true) or for(;;)
    перервати break

    пропустити ітерацію за допомогою директиви continue

    break/continue підтримують мітки перед циклом.
    лише за допомогою міток можна
    перервати вкладений цикл

*/


/*for(let i = 2; i <= 10; i++) {
    if(i % 2 == 0) {

        console.log(i);
    }
}*/

/*let i = 0;
while(i < 3) {
    console.log(`Number: ${i++}`);
}*/


// цикл повторюється доти, поки користувач
// не веде число більше за 100 або не скасує операцію
// або не введе порожній рядок
/*let i = 0;
for(;;) {
    let input =
        +prompt('Введіть число більше за 100', '');
    if (input > 100){
        console.log('you are doing great work');
        break;
    }

    if (input == '') {
        break;
    }

    if(input == false) {
        break;
    }
}*/


/*

    Перевірка && num рахуватиметься false,
    коли num матиме значення null або порожній рядок ''.
    В цьому випадку цикл while теж потрібно буде зупинити.

    Друга перевірка додається через те, що у випадку, коли num буде null,
    тоді перевірка num <= 100 верне true.
    Отже, без другої перевірки цикл не зупиниться,
    якщо користувач натисне Скасувати.
    Необхідні обидві перевірки.

*/

/*let num;
 do {
     num =
         prompt('Number equals 101 and bigger?', 0);

 } while(num <= 100 && num);*/



/*let n =
    +prompt('Write a number', '');*/

/*for (let i = 2; i < n; i++) {
    if (i % 1 === 0) {
        if (i % n === 0) {
            console.log(i);
        }
    }
}*/

/*let n =
    +prompt('write:', '');

nextPrime:
    for (let i = 2; i <= n; i++) { // для кожного i...

        for (let j = 2; j < i; j++) { // шукаємо дільник..
            if (i % j === 0) continue nextPrime; // не просте, беремо наступне i
        }

        console.log( i ); // просте число
    }*/

// конструкція switch

// приклад використання switch

/*let variable =
    +prompt('Write a number', '');

switch (variable) {
    case 1:
        alert('cool');
        break;
    case 2:
        alert('super');
        break;
    default:
        alert('finish');
}*/

/*let a =
    +prompt('Write a message: ', '');*/


// об'єднання двох кейсів
/*
switch(a) {
    case 1:
        alert('something');
        break;
    case 2:
    case 3:
        alert('other');
        break;

    default:
        alert('error');
}
*/

/*
    Для 0 та 1 буде виконано перший alert.
    Для 2 – другий alert.
    Але для 3: результат виконання prompt є строкове значення "3",
    яке строго не дорівнює === числу 3.
    Таким чином ми маємо “мертвий код” в блоці case 3!
    Буде виконано код блоку default.
*/

/*
let arg =
    prompt('Write a value', '');

switch(arg) {
    case '0':
    case '1':
        alert('one or ziro');
        break;
    case '2':
        alert('Two');
        break;

    case 3:
        alert('Never used');
        break;

    default:
        alert('unknown value');
}
*/

/*let browser =
    prompt('Write text: ', '');

if (browser === 'Edge') {
    alert('You have got the Edge!');
}
else if (browser === 'Chrome' ||
            browser ==='FireFox' ||
           browser === 'Safari' ||
           browser === 'Opera')
{
    alert('Ми підтримуємо і ці браузери');
}
else {
    alert( 'Маємо надію, що ця сторінка виглядає добре!' );
}*/

/*let msg = +prompt('number', '');

switch(msg) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        alert('unknown');
}*/

/*function showMessage() {
    alert('Hello everybody!');
}


function name(parameter1, parameter2, ... parameterN) {
    // body of function
}

showMessage();*/

/*// Зміна, котра оголошена в тілі функції доступна лише в ній
function showMessage() {
    let message = "Hello, I am JavaScript!";

    alert(message);
}

showMessage();

alert( message );*/

/*// Функція може використовувати зовнішні зміни
let username = 'Ivan';

function showMessage () {
    let message = 'Hello, ' + username;
    alert(message);
}

showMessage();*/

// Функція має повний доступ до зовнішньої змінної
// вона може змінювати її значення
/*

let userName = "Ivan";

function showMessage() {
    userName = 'Bogdan';

    let message = 'Hello, ' + userName;
    alert(message);
}

// Hello Bogdan
showMessage();

// Bogdan
alert( userName );
*/

// якщо в функції є змінна
// з таким ж самим ім'ям як у зовнішньої
// то зовнішня змінна ігнорується

/*let userName = 'Ivan';

function showMessage() {
    let userName = 'Bogdan';

    let message = 'Hello, ' + userName;
    alert(message);
}

showMessage();

alert(userName);*/

// можемо додавати параметри в функцію
/*function showMessage(from, text) {
    alert(from + ': ' + text);
}

showMessage('Anna', 'Hello!');
showMessage('Anna', 'How are you?');*/


// функція змінила значення лише локальної копії
// значення глобальної змінної не було змінено
/*function showMessage(from, text) {

    from = '*' + from + '*';

    alert(from + ': ' + text);
}*/

/*

// default value для параметра можна присвоїти іншу функцію
function showMessage(from, text = anotherFunction()) {
    // anotherFunction() виконується лише якщо `text` не задано
    // результат виконання цієї функції присвоїться змінній `text`
}*/


/*


Обчислення типових параметрів
В JavaScript, типовий параметр обчислюється кожного разу,
коли викликається функція без відповідного параметру.
В прикладі вище, функція anotherFunction() не викличеться,
якщо буде задано параметр text.
З іншого боку, вона буде викликатися кожного разу, коли text
відсутній.

*/

/*// Можна вказувати default value для параметра
function showMessage(from, text = "unknown text") {
    alert(from + ": " + text);
}*/

// let from = 'Anna';

// showMessage(from, 'Hello');

// Anna
// alert(from);

// якщо викликати функцію без аргументів
// то буде undefined

// "*Анна*: undefined"
// showMessage('Anna');

// Типове значення також додається, якщо параметр існує,
// але суворо дорівнює undefined, наприклад:
// showMessage("Anna", undefined);

/*

наприклад, функція має два параметри,
при викликанні функції ми кладемо в неї
два аргумента


*/


/*// без типового значення для параметра
function showMessage(from, text) {
    if (text === undefined) {
        text = 'none';
    }

    alert(from + ': ' + text);
}*/

/*
function showMessage(from, text) {
    // Якщо значення у змінній text дає false, призначається типове значення
    // це передбачає, що text == "" це те саме, що і його повна відсутність
    text = text || 'текст повідомлення відсутній';
...
}*/

/*function fun(text) {
    text = text ?? 'empty';
    alert(text);
}

fun('');*/

/*function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
alert(result);*/


/*
function checkAge(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return confirm('some text');
    }
}

let age =
    +prompt('How old are you?', '');

if (checkAge(age)) {
    alert('Access given');
}
else {
    alert('Access is canceled');
}
*/

/*
В коді вище, якщо checkAge(age)
поверне false,
    тоді функція
showMovie не дійде до виконання alert.

    function showMovie(age) {
    if ( !checkAge(age) ) {
        return;
    }

    alert( "Показуємо фільм" ); // (*)
    // ...
}
*/

/*// Порожня функція
// повертає undefined
function doNothing() {

}

// true
alert(doNothing() === undefined);*/

/*// порожній return це те саме, що return undefined
function doNothing() {
    return;
}

// true
alert(doNothing() === undefined);*/

/*

    Не можна робити перенос рядка між return та його значення
    наприклад,
    // error, тому що буде сприйматися наче між return та value
    // є ;
    return
        ('some' + 'text')

     правильно ось так:
     return (
                  'some'
                   + 'text')
* */


// Функцію принято називати дієсловом

/*

    showMessage(..)     // показує повідомлення
    getAge(..)          // повертає вік (якось його отримує або
     обчислює)
    calcSum(..)         // обчислює суму і повертає результат
    createForm(..)      // створює форму (і зазвичай її повертає)
    checkPermission(..) // перевіряє доступ, повертає true/false

*/

/*let n =
    +prompt('Number: ', '');*/

/*function showNumbers(n) {
    nextPrime: for (let i = 2; i < n; i++) {

        for (let j = 2; j < i; j++) {

            if (i % j === 0) {
                continue nextPrime;
            }

        }

        alert(i);
    }
}*/


/*let n =
    +prompt('Number: ', '');

function showNumbers(n) {
    for (let i = 0; i < n; i++) {
        if (!isPrime(i)) continue;

        alert(i);
    }
}

function isPrime(n) {
    for (let i = 0; i < n; i++) {
        if (n % i == 0) return false;
    }

    return true;
}*/



/*function checkAge(age) {
    // (age > 18) ?  alert(true) :  confirm('Do you have agreement from your parants?');
    age = alert(true) || confirm('Do you have agreement from your parants?');
}

checkAge(9);*/



// Правильна відповідь:

/*
function checkAge(age) {
    return (age > 18) ? true : confirm('Батьки дозволили?');
}*/

/*
function checkAge(age) {
    return (age > 18) || confirm('Батьки дозволили?');
}*/

/*function min(a, b) {
    if (a > b) {
        alert(b);
    }
    else {
        alert(a);
    }
}

min(13,2);*/

/*function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степінь ${n} не підтримується, використовуйте натуральне число`);
} else {
    alert( pow(x, n) );
}*/


/*// Function Declaration
function sayHi() {
    alert('Hello');
}*/

/*// Function Expression
let sayHi = function() {
    alert('Hello');
};*/

// Функція це значення

/*function sayHi() {
    alert('Hello');
}

// show code of function
alert(sayHi);*/

// функція це значення, тому можемо функцію скопіювати в змінну

/*function sayHi() {
    alert('Hello');
}*/

/*Рядок (2) копіює це значення в змінну func. Ще раз зауважте: після sayHi немає дужок.
Якби вони там були, тоді func = sayHi() записав би результат виклику sayHi()
у func, а не саму функцію sayHi.*/

/*let func = sayHi;

func(); // Hello
sayHi(); // Hello*/

// крапка з комою стоїть, тому що це частина оголошення змінної, а не функції
/*let value = function() {
    alert('Hello');
};

let variable = value;

variable();
value();*/

// callback

/*function ask(question, yes, no) {
    if (confirm()) yes()
    else no();
}*/

/*function showOk() {
    alert(' You are gree ');
}

function showCancel() {
    alert('You have canceled doing');
}*/

/*Аргументи showOk та showCancel функції ask
називаються функціями зворотного виклику
або просто колбеками.*/

// ask('Are you agree?', showOk, showCancel);

// анонімні функції (їх не можна викликати поза ask())

/*ask(
    'Are you agree?',
    function() { alert('You are agree'); },
    function() { alert('You canceled attention'); }
);*/

/*

    типи даних відображають дані
    функція відображає дію

*/

/*

       // Оголошення Функції
    function sum(a, b) {
        return a + b;
    }

        // Функціональний Вираз
    let sum = function(a, b) {
        return a + b;
    };

*/

// декларовану функцію можна використовувати де завгодно перед оголошенням її та після

// з функціональним виразом так не спрацює

/*say('Hello'); // Hello

function say(arg) {
    alert(arg);
}*/

/*say('Hello'); // Нічого не відображає

let say = function(arg) {
    alert(arg);
};*/


/*У суворому режимі, якщо Оголошення Функції знаходиться
в блоці {...}, то функція доступна усюди всередині блоку.
Але не зовні.*/

/*let age =
    +prompt("How old are you?", 18);

if (age < 18) {
    function welcome() {
        alert('Hello');
    }

    welcome();
}
else {
    function welcome() {
        alert("Hello");
    }
}

welcome();  // помилка в суворому режимі (ReferenceError: welcome is not defined)*/

/*let age =
    +prompt('How old are you?', 18);

let welcome;

if (age < 18) {
    welcome = function() {
        alert('Hello');
    };
}
else {
    welcome = function() {
        alert('Congraduation');
    };
}

welcome();*/

// можна використати умовний оператор ?

/*
let age =
    +prompt('How old are you?', 18);

let welcome = (age < 18) ?
    function() { alert('Hello'); } :
    function() { alert('Congraduation'); };

welcome();
*/


/*
Функції — це значення.
Ми можемо присвоїти їх змінній, копіювати чи визначити у будь-якій частині коду.
Якщо функція визначена як окрема інструкція в основному потоці коду,
 то це називають “Оголошенням Функції”.
Якщо функція була створена як частина іншого виразу, тоді це — “Функціональний Вираз”.
Обробка Оголошень Функцій виконується перед виконанням блоку коду.
Такі функції є видимими у всьому блоці.
    Функції, що були визначені за допомогою Функціонального
    Виразу, будуть створені тільки тоді, коли до них дійде потік виконання.
    Зазвичай, коли нам потрібно визначити функцію, то
    краще віддати перевагу синтаксису Оголошення Функції,
    бо така функція є видимою навіть перед її визначенням в коді.
    Це дає нам більшу гнучкість в організації коду та й сам синтаксис є більш читабельним.

    Таким чином, використовувати Функціональний Вираз потрібно тільки тоді,
     коли Оголошенням Функції не підходить для розв’язання нашої задачі.
      Ми розглянули декілька таких прикладів у цьому розділі й побачимо ще в майбутньому.

      */

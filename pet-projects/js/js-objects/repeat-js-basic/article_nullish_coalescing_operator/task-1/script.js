'use strict';

/*
* оператор нульового злиття повертає перший визначений
* елемент, тобто відмінний від null/undefined
* */

let userName = null;
let userAge = undefined;
let userCity = 'Kyiv';

/*
* оператор нульового злиття поверне гіст
* оскільки перше значення за замочуванням null
* головна умова нульового злиття значення за
* замовчуванням не повинно бути null/undefined
* */
console.log(userName ?? 'Gist');

/*
* оператор нульового злиття поверне 18 оскільки
* значення за замовчування для змінної userAge =
* undefined
* */
console.log(userAge ?? 18);

/*
* поверне змінну userCity оскільки змінна відмінне
* значення від null/undefined
* */
console.log(userCity ?? 'Unknown place');

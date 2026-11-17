'use strict';

let firstName = null;
let lastName = undefined;
let nickName = "Supercoder";
let defaultName = "Anonymous";

/*
* оператор нульового злиття повертає перше
* визначене значення тобто nickName
* оператор нульового злиття ігнорує не визначені
* значення тобто ті, котрі null/undefined
* firstName, lastName і поверне перше визначене значення
* а саме nickName
* */
console.log(firstName ?? lastName ?? nickName
    ?? defaultName);

let val1 = null;
let val2 = undefined;
let val3 = null;

/*
* оператор нульового злиття поверне перше
* визначене значення тобто останній рядок
* перші 3 null/undefined
* всі 3 перші операнди невизначені тобто
* null/undefined тому оператор нульового злиття
* проігнорує їх і поверне останній рядок тобто останнє
* визначене значення
* */
console.log(val1 ?? val2 ?? val3 ?? 'Резервне значення');


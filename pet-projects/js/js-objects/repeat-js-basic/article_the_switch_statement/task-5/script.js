'use strict';

let number =
    +prompt('Write number between 0 and 3', '');

switch(number) {
    case 0:
        console.log('You wrote a number 0');
        break;
    case 1:
        console.log('You wrote a number 1');
        break;
    case 2:
    case 3:
        console.log('You wrote number 2, and maybe 3');
        break;
    default:
        console.log('This case doesnt exist');
}

/*
* якщо прибрати унарний плюс
* то буде введено значення рядок
* звідси світч буде порівнювати строго
* ведене значення рядок і кейси числа
* і тому не буде виведено жодного кейса
* лише дефолт
* */

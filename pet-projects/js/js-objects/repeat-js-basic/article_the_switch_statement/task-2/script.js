'use strict';

let role = 'editor';


/*
* якщо вести едітор, то виведе
* console.log("Доступ до редагування");
* console.log("Доступ тільки для читання");
* тому що перед едітором немає брейку
* виконується код автора далі
* потім немає брейка перед
* підписником тому далі код
* підписника виконується
* далі брейк операція завершується
*
* якщо змінити роль на едмін
* виведе тільки повідомлення
* повний доступ далі
* брейк
* */
/*
switch(role) {
    case 'admin':
        console.log('Fully access');
        break;
    case 'editor':
    case 'author':
        console.log('Editor access');

    case 'subscriber':
        console.log('Read only access');
        break;
    default:
        console.log('Unknown role');
}
*/


'use strict';

let status = 'active';

/*
* виконується строга рівність всюди
* */
switch(status) {
    case 'pending':
        console.log('Await a response');
        break;
        /*
        * виведе цей шматок коду
        * оскільки змінна status = 'active'
        *
        * */
    case 'active':
        console.log('Account is active');
        break;
    case 'deleted':
        console.log('Account is deleted');
        break;

        /*
        * виконується ця частина коду якщо
        * вказати для статуса блокед
        * */
    default:
        console.log('Status didnt recognized');
}

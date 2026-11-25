'use strict';

// треба поставити пробіли спочатку і в кінці виразу в умові
/*if (n < 0) { alert(`Ступінь ${n} не підтримується`); }*/

// або навіть краще просто дужки розкрити і
// перенести вираз
/*if (n < 0) {
    alert(`Ступінь ${n} не підтримується`);
}

// зарядок занадто довгий треба зробити перенос
if (id === 123
    && moonPhase === 'Зростаючий місяць'
    && zodiacSign === 'Терези') {
    letTheSorceryBegin();
}

// краще явно вказати дужки для умови
if (n < 0) {
    alert(`Ступінь ${n} не підтримується`);
}*/
/*
function calculateTotal(items, discount) {
    // треба поставити табуляцію і пробіли між знаком
    // присвоєнням
    let total = 0;

    // логічний вертикальний відступ від змінної
    // та циклом
    // відступи між операторами та умовами в циклі
    for(let i = 0; i < items.length; i++) {
        // логічна табуляція в тілі цикла
        // та відступи між оператором
        // також явне додавання крапки з комою в кінець
        total += items[i].price;
    }

    // вертикальний відступ між циклом та умовою
    if (discount) {
        // табуляція всередині тіла умови
        // відступи між оператором
        // явне додавання крапки з комою
        total -= discount;
    }

    // вертикальний відступ між умовою та
    // директивою return
    // явне вказування крапки з комою
    return total;
}

// логічний вертикальний відступ між функцією
// та змінами
// розкрити дужки об'єкту
let cart = [
    {price: 100},
    {price: 200}
];

// вертикальний відступ між об'єктом
// відступи між оператором
// відступи в параметрі між аргументами
// явно вказати крапку з комою
let result = calculateTotal(cart, 50);*/
/*

function processUserData(user) {
    if (user === null) {
        alert("User is unknown");
        return null;
    }

    if (user.age < 18) {
        alert('Minimum available age is 18');
        return 'Access is canceled';
    }

    let status = 'Access is given';
    logActivity(user.id);
    return status;
}

function processItems(items) {
    for (let i = 0; i < items.length; i++) {
        if (!items[i].isAvailable) continue;

        let price = calculatePrice(items[i]); renderItem(items[i], price);
    }
}
*/
/*

// пишуть головну функцію відразу оскільки читачу
// головне відразу зрозуміти як працює код навіть
// без читання допоміжних функцій
let userEmail = "student@example.com";

if (validateEmail(userEmail)) {
    logNewUser(userEmail);
    sendWelcomeEmail(userEmail);
}

function validateEmail(email) {
    return email.includes("@");
}

function sendWelcomeEmail(email) {
    console.log(`Лист відправлено на ${email}`);
}

function logNewUser(email) {
    console.log(`Зареєстровано користувача: ${email}`);
}
*/

/**
* функція обраховує знижку
*
* @param {number} price - ціна
 * @param {number} discountRate - знижка
*/
/*function calculateDiscount(price, discountRate) {
    return price - (price * discountRate);
}
// головна перевага можна зробити html документацію*/
/*
function calculateNum(num) {
    if (num < 0) {
        Math.max(0, len + num);
        return num;
    } else {
        return num;
    }

    return 0;
}*/

// let userData = fetchUserData();
// let accountDetails = fetchAccountDetails();
//
// function showUser(data, details) {
//     showDetails(userData, accountDetails);
// }
/*

function checkUserPermission(user) {
    if (!user.isAdmin) {
        return false;
    }
    return true;
}

function logOutUser(user) {
    if (checkUserPermission === false) {
        // Log out from system
    }
}

let isValid;
function validateEmail(email) {
    isValid = email.includes("@");
    if (!isValid) {
        clearEmailInput();
    }

    return isValid;
}

function showErrorNotification(email) {
    if (validateEmail === !isValid) {
        console.log('error');
    }
}
*/

/*let userName = 'Олександр';
let userRole = 'admin';

function isAdmin(userName, userRole) {
        return Boolean(userName === userRole);
}*/


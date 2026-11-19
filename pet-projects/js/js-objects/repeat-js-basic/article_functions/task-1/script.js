'use strict';

function checkAgeAndWelcome(age,
                            userName = 'Gist') {
    if (age >= 18) {
        return `Hi, ${userName}! Access is confirmed`;
    }
    else {
        return `Hi, ${userName} ! Access is canceled `;
    }
}

console.log(checkAgeAndWelcome(19, 'pavlo'));

'use strict';

let num =
    +prompt('Write a number', '');

/*
* якщо умова true, то наступні блоки коду не будуть
* перевірятися
* */
if (num > 0) {
    alert(1);
}
else if (num < 0) {
    alert(-1);
}
else {
    alert(0);
}

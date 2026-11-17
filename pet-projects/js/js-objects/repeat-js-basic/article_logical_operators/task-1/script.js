'use strict';

/*
* оператор або повертає перше правдиве значення або
* останнє хибне
*
* поверне рядок, тому що він не порожній, значить true
* */
// alert(null || 0 || 'JavaScript' || true); // JavaScript

/*
* тут немає істинного значення, тому поверне останнє
* хибне тобто 0
* */
// alert(undefined || null || 0); // 0

/*let userName = "";
let defaultName = 'Gist';*/

/*
* поверне defaultName оскільки рядок не порожній
* тому істина
* */
// alert(userName || defaultName || 'Anonim'); // Gist

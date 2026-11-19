'use strict';

function showCount(count) {
   if (count === undefined) return 'Expression is undefined';
   return `Amount: ${count}`;
}

console.log(showCount(5)); // 5
console.log(showCount(0)); // 0
console.log(showCount()); // 'Expression is undefined'

'use strict';

let browser = 'Chrome';

if (browser === 'Edge') {
    console.log('You have Edge!');
}
else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera')
{
    console.log('We support these browsers');
}
else {
    console.log('We hope, this page looks beautiful');
}

/*
* конструкція switch використовує строге порівняння ===
* тому в if else також треба використати строге порівняння ===
* */

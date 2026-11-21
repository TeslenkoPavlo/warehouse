"use strict";

function hi(name) {
    let congraduation = `Hi, ${name}`;

    debugger;

    talk(congraduation);
}

function talk(congraduation) {
    alert(`some words: ${congraduation}`);
}

for(let i = 0; i < 5; i++)
{
    console.log(i);
}

"use strict";
function test(num1, num2, str) {
    let array = [];
    for (let n of arguments) {
        array.push(Number(n));
    }
    return array;
}
console.log(test(1, 2, '444'));

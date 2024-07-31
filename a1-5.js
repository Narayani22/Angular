"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function Fibonacci(No1) {
    var t1 = 0, t2 = 1, t3;
    t3 = t1 + t2;
    var iCnt = 0;
    for (iCnt = 3; iCnt <= No1; iCnt++) {
        console.log("\t" + t3);
        t1 = t2;
        t2 = t3;
        t3 = t1 + t2;
    }
}
var no = prompt('Enter the number : ');
console.log("Fibonacci Series is :\t");
var num = parseFloat(no);
Fibonacci(num);

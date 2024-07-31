"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function Chkprime(No1) {
    var Cnt = 0;
    var Count = 0;
    for (Cnt = 1; Cnt <= No1; Cnt++) {
        if (No1 % Cnt == 0) {
            ++Count;
        }
    }
    if (Count == 2) {
        return true;
    }
    else {
        return false;
    }
}
var no = prompt('Enter the number : ');
var prime = parseInt(no);
Chkprime(prime);
var ret = false;
ret = Chkprime(prime);
if (ret == true) {
    console.log("It is prime number" + ret);
}
else {
    console.log("It is not a prime number" + ret);
}

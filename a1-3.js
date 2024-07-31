"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function DisplayFactors(No1) {
    var Cnt = 0;
    console.log("Factors are :");
    for (Cnt = 1; Cnt < No1; Cnt++) {
        if ((No1 % Cnt) == 0) {
            console.log("\t " + Cnt);
        }
    }
}
var no = prompt('Enter the number : ');
var factors = parseInt(no);
DisplayFactors(factors);

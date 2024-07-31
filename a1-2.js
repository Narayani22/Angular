"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
function Area(no1) {
    var pi = 3.14;
    var areaofcircle = 0;
    areaofcircle = pi * no1 * no1;
    return areaofcircle;
}
var prompt = promptSync();
var no = prompt('Enter the area : ');
var area = parseFloat(no);
var ret = 0;
ret = Area(area);
console.log("Area of Circle is : " + ret);

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ar1 = [1, 2, 3];
var ar2 = ['1', '2', '3', '4'];
var ar3 = [1, '2', true];
var ar4 = []; //compile error
var ar5 = []; //compile ok
var ar6;
ar6 = ['1', '2'];
function printArray(ar) {
    ar.forEach(function (element) {
        console.log(element);
    });
}
// printArray(ar2)//string [] not support
printArray(ar1);
//-----------------------
var ar7 = ['a', 'b'];
var ar8 = ['c', 'd', 'e'];
ar7.push.apply(ar7, ar8);
console.log(ar7);
var ar9 = ['a', 'b'];
var ar10 = ['c', 'd', 'e'];
var ar11 = __spreadArray(__spreadArray([], ar9, true), ar10, true);
console.log(ar11);
//------------------------
var t1 = [1, 2, 3];
// let t2: [number, string]=[1.09,2.89];
var x = t1[0], y = t1[1];
console.log(x, '-', y);

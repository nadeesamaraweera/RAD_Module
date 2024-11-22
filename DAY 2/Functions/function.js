// ----------function params passing and type secuaring -------------------------------------------------------- //
function add(x, y) {
    if (x > 10) {
        return x + y;
    }
    else {
        return x;
    }
}
console.log(add(10, 20));
function added(x, y) {
    return x + y;
}
function calculate(n1, n2, calcFn) {
    var result = calcFn(n1, n2);
    return result;
}
console.log(calculate(10, 20, added));
function substraction(x, y) {
    return x - y;
}
function subsction(n1, n2, calcFn) {
    var result = calcFn(n1, n2);
    return result;
}
console.log(subsction(20, 10, substraction));
function Multilication(x, y) {
    return x * y;
}
function Multi(n1, n2, calcFn) {
    var result = calcFn(n1, n2);
    return result;
}
console.log(Multi(20, 10, Multilication));
function divide(x, y) {
    return x / y;
}
function divided(n1, n2, calcFn) {
    var result = calcFn(n1, n2);
    return result;
}
console.log(divided(20, 10, divide));

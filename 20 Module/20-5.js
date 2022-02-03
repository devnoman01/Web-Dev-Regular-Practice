//  factorial
/*
3! = 3x2x1
4! = 4x3x2x1
5! = 5x4x3x2x1
6! = 6x5x4x3x2x1
7! = 7x6x5x4x3x2x1
*/

function factorial(factLimit) {
    var fact = 1;
    for (let i = 1; i <= factLimit; i++) {
        fact = fact *i;
        console.log(fact);
    }
    return fact;
}
var factorialResult = factorial(5);
console.log(factorialResult);
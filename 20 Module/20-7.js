//  with while loop & increment
function factorial(number) {
    let fact = 1;
    let i = 1;
    while(i <= number){
        fact = fact * i;
        i++;
    }
    return fact;
}

var factorialResult = factorial(5);
console.log(factorialResult);


//  with while loop & decrement
function factorial(number) {
    let fact = 1;
    let i = number;
    while(i >= 1){
        fact = fact * i;
        i--;
    }
    return fact;
}

var factorialResult = factorial(5);
console.log(factorialResult);
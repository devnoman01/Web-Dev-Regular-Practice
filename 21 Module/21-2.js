//  swap values with temp variable
console.log('swap values with temp variable');
var first = 5;
var second = 7;
console.log(first + " " + second);
var temp = first;
first = second;
second = temp;
console.log(first + " " + second);

// swap values without third variable
console.log('swap values without third variable');
first = 4;
second = 6;
console.log(first + " " + second);
first *= second;
second = first / second;
first = first / second;
console.log(first + " " + second);

//  swap values by destructuring
console.log('swap values by destructuring');
first = 8;
second = 12;
console.log(first + " " + second);
[first, second] = [second, first];
console.log(first + " " + second);
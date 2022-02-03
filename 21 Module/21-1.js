//  using absolute value
const myNumber = -5;
const output = Math.abs(myNumber);  // 5
console.log(output);

//  using floor & ceil value
const teaPrice = 7.5397;
const lowPrice = Math.floor(teaPrice);  // 7
console.log(lowPrice);
const highPrice = Math.ceil(teaPrice);  // 8
console.log(highPrice);

//  round value
const coffeePrice = 6.54;
const coffeeRoundPrice =Math.round(coffeePrice);    // 7
console.log(coffeeRoundPrice);
const juicePrice = 6.24;
const juiceRoundPrice =Math.round(juicePrice);  // 6
console.log(juiceRoundPrice);

//  using random number
const randomNumber = Math.random() * 10;
const randomRoundNumber = Math.round(randomNumber);
console.log(randomRoundNumber);
const numbers = [3, 6, 4, 8, 19, 15, 21, 45, 87];
// slice will get specific item from array
const numberSliced = numbers.slice(4, 8);
console.log(numberSliced);

// splice will get specific items from array & delete from array
// splice can also insert items inside array
const numberSpliced = numbers.splice(4, 2, 11, 12);
console.log(numberSpliced);
console.log(numbers);
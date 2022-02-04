//  sum of values in array
const numbers = [44, 23, 34, 54, 5, 78];

function sumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum += element;
    }
    return sum
}
let total = sumOfArray(numbers);
console.log('Sum is', total);
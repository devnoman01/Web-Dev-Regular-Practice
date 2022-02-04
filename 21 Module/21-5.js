//  largest value in array
const numbers = [44, 23, 34, 54, 5, 78];

function findLargestValue(numbers) {
    let largeValue = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(largeValue < numbers[i]){
            largeValue = numbers[i];
        }
    }
    return largeValue;
}
let max = findLargestValue(numbers);
console.log('Largest value is', max);

//  smallest value in array
function findSmallestValue(numbers) {
    let smallValue = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if(smallValue > numbers[i]){
            smallValue = numbers[i];
        }
    }
    return smallValue;
}
let min = findSmallestValue(numbers);
console.log('Smallest value is', min);
function secondLargestElement(numbers) {
    first = second = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(element > first){
            second = first;
            first = element;
        }
    }
}

const numbers = [46, 13, 79, 52, 17, 96];
let first;
let second;
largestElement(numbers);
console.log('Largest number', first);
console.log('Second largest number', second);
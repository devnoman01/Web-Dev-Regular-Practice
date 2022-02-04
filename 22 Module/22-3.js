//  reverse a string
const message = 'Hello, how are you?';

function reverseString(text) {
    let reverse = '';
    for(const letter of text){
        reverse = letter + reverse;
    }
    return reverse;
}

const reversed = reverseString(message);
console.log(reversed);
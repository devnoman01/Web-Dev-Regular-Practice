function addNumbers(num1, num2){
    let result = 0;
    for(const num of arguments){
        result += num;
    }
    return result;
}
const sum = addNumbers(22, 15, 36, 99);
console.log(sum);

function getFullName(firstName, lastName){
    let fullName = '';
    for(const part of arguments){
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('Md', 'Rahim', 'Uddin', 'Molla', 'Showdagor');
console.log(name);
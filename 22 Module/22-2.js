//  remove duplicate item from array
const names = ['arif', 'tamim', 'tuhin', 'pinas', 'sakib', 'faruk', 'arif', 'sakib', 'faruk'];

function removeDuplicate(names) {
    const unique = [];
    for(const element of names){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
let uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
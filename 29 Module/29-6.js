const numbers = [4, 7, 1, 3, 9, 2, 5];
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

const friends = ['rafi', 'tamim', 'arif', 'faruq', 'shagatam'];
const sortedFriends = friends.sort();
console.log(sortedFriends);
const reversedFriends = friends.reverse();
console.log(reversedFriends);

// number sorting
const bigNumbers = [66, 58, 81, 94, 5, 8, 2, 31, 47];
const sortedBigNumbers = bigNumbers.sort(function(a, b){
    return a - b;
});
console.log(sortedBigNumbers);
const anthem = 'Amar sonar bangla ami tomay valobashi';

// split with space ' '
const words = anthem.split(' ');
console.log(words);

// split with space 'a'
const wordsWithoutA = anthem.split('a');
console.log(wordsWithoutA);

// slice a part with index value (startIndex, endIndex)
const a = 'independent';
console.log(a);         // independent

const b = a.slice(2, 8);
console.log(b);         // depend

// substr with index value (startIndex, totalIndexNeeded)
const x = 'We got our independent in 1971';
console.log(x);

const y = x.substr(7, 15);
console.log(y);         // our independent

// substring with index value (startIndex, endIndex)
const j = 'We got our independent in 1971';
console.log(j);

const k = j.substring(11, 22);
console.log(k);         // independent

// concat string
const first = 'Dhaka';
const second = ' City';
const cityName = first.concat(second);
const dhakaInfo = cityName.concat(' is very populated.');
console.log(dhakaInfo);

const nameList = ['rahim', 'karim', 'kalam', 'salam'];
const allName = nameList.join(' ');
console.log(allName);
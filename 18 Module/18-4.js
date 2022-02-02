var lastBench = ['tuhin', 'tamim', 'sunny', 'shahadat'];

//  push or add item into array at last position
lastBench.push('noman');
lastBench.push('sakib');
console.log(lastBench);

var studentId = [5, 7, 9, 11, 13];
studentId.push(15);
console.log(studentId);

//  pop or remove last item from array
var lastItem = studentId.pop();
console.log(lastItem);

//  add item into array at first position
lastBench.unshift('ashraf');
console.log(lastBench);
studentId.unshift(2);
console.log(studentId);

//  remove first item from array
lastBench.shift();
console.log(lastBench);
studentId.shift();
console.log(studentId);
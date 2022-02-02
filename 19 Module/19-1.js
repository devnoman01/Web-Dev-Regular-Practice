var favoriteBook = '4 hour work week';

//  array
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'story brand';

bookList.push('small giants');
bookList.pop();

//  condition
if(bookList[1] == 'hooked'){
    console.log('I am hooked');
}
else{
    console.log('I am not hooked');
}

//  while loop
var i = 0;
while(i < 5){
    console.log(i);
    console.log('looping looping looping');
    i++;
}

//  for loop
for (let i = 0; i < bookList.length; i++) {
    const element = bookList[i];
    console.log(element);
}
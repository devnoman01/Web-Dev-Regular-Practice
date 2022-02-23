const myFavDate = new Date('1971-12-16');
console.log(myFavDate);

const anotherDate = new Date(1971, 3, 26);
console.log(anotherDate);

if(myFavDate.getTime() < anotherDate.getTime()){
    console.log('16 December is earlier');
}
else{
    console.log('26 March is earlier');
}
//  check leapyear
function isLeapYear(year) {
    if(year % 4 == 0){
        console.log('Leap Year');
    }
    else{
        console.log('Not Leap Year');
    }
}

const myYear = 2016;
var checkYear = isLeapYear(myYear);
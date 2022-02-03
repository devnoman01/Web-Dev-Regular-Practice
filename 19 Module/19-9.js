var skyColor = 'blue';

var phones = ['iphone', 'xiaomi', 'samsung', 'htc', 'realme'];
phones[2] = 'oppo';

//  check nokia is available
if(phones.indexOf('nokia') == -1){
    console.log('opps! nokia is missing')
}

//  if realme is available
if(phones.indexOf('realme') != -1){
    console.log('realme is available')
}

//  loop
var num = 0;
while(num <= 10){
    num++;
}

for (let i = 0; i < phones.length; i++) {
    
}

//  function
function addTwoNumber(num1, num2) {
    var total = num1 + num2;
    return total;
}
addTwoNumber(5, 8);

//  object
var microphone = {
    brand: 'boya',
    price: 1200,
    color: 'black'
}
var bottleColor = "yellow";
var waterQuantity = 1;
var isFull = false;

//  array
var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('paper');
items.push('envelope');
items.pop();

//  conditions
if(items.length >= 4){
    console.log('Too many stuff');
}
else{
    console.log('Clean desk');
}
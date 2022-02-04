//  max of two values
const market = 450;
const hotel = 350;
const transport = 400;

//  Check max value with if else
function findLargeValue(market, hotel, transport) {
    if(market > hotel && market > transport){
        console.log('Market have better profit');
    }
    else if(hotel > market && hotel > transport){
        console.log('Hotel have better profit');
    }
    else{
        console.log('Transport have better profit');
    }
}
console.log('Check max value with if else');
findLargeValue(market, hotel, transport);

//  Check max value with Math.max()
console.log('Check max value with Math.max()');
let max = Math.max(market, hotel, transport);
console.log(max,'is better profit');
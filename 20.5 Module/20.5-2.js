//  farenheit to celcius conversion
function farenheitToCelcius(temp) {
    let cel = (temp - 32) * 5/9;
    return cel;
}

var farValue = 86;
var celValue = farenheitToCelcius(farValue);
console.log('Celcius value =', celValue);
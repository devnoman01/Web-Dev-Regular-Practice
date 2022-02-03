//  celcius to farenheit conversion
function celciusToFarenheit(temp) {
    let far = (temp * 9/5) + 32;
    return far;
}

var celValue = 30;
var farValue = celciusToFarenheit(celValue);
console.log('Farenheit value =', farValue);
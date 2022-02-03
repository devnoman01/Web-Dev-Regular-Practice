//  celcius to farenheit conversion
function celciusToFarenheit(temp) {
    let far = (temp * 9/5) + 32;
    return far;
}

var celValue = 30;
var farValue = celciusToFarenheit(celValue);
console.log('Farenheit value =', farValue);


//  farenheit to celcius conversion
function farenheitToCelcius(temp) {
    let cel = (temp - 32) * 5/9;
    return cel;
}

var farValue = 86;
var celValue = farenheitToCelcius(farValue);
console.log('Celcius value =', celValue);


//  interest rate calculation
//  per month 3000 for 10% for 5 year (60 months)
function interestCalculate(payment, interest, months) {
    let total = payment * Math.pow((1 + 0.1), 60);
    return total;
}

var paymentPerMonth = 3000;
var interestRate = 0.1;
var months = 60;
var totalAmount = interestCalculate(paymentPerMonth, interestRate, months);
console.log('Total amount =',totalAmount.toFixed(2));
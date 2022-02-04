

function fibonacciSeries(num) {
    const fibo = [0, 1];
    if(typeof num == 'number' && num >= 3){
        for (let i = 2; i <= num; i++) {
            fibo[i] = fibo[i-1] + fibo[i-2];
        }
    }
    else{
        console.log('Enter valid number');
    }
    return fibo;
}
const fiboSeries = fibonacciSeries(10);
console.log(fiboSeries);

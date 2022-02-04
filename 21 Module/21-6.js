//  fibonacci series using loop
//  nth = (n-1)th + (n-2)th

const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);
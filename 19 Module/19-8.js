var i = 0;
while(i < 10){
    console.log(i);
    if(i == 5){
        break;
    }
    i++;
}

var numbers = [54, 35, 21, 98, 64, 83];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element > 80){
        continue;
    }
    console.log(element);
}
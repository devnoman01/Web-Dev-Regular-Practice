var haveJob = false;
var moneySaved = 200000;

if (haveJob == true && moneySaved > 100000){
    console.log("You are ready for marriage.");
}
else{
    console.log("Sorry you are not ready for marriage.");
}


if (haveJob == true || moneySaved > 100000){
    console.log("You have to wait for marriage.");
}
else{
    console.log("Sorry you are not ready for marriage.");
}
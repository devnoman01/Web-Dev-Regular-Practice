var iceCreamPrice = 50;
var biscuitPrice = 30;
var cheeseBurger = 120;
var myBudget = 100;
var packedWell = false;

if (cheeseBurger < myBudget){
    console.log('Lets buy icecreame');
}
else if (iceCreamPrice < myBudget){
    console.log('Lets buy icecreame');
}
else if(biscuitPrice < myBudget){
    console.log('Lets buy biscuit')
}
else{
    console.log('Budget is low. Nothing to buy');
}

//  nested condition
if(iceCreamPrice < myBudget){
    if(packedWell == true){
        console.log('Quality is good');
    }
    else{
        console.log('Bad quality. cannot by it');
    }
}
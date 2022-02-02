function bringBurger(money){
    console.log(money);
    var burgerPrice = 125;
    var burgerQuantity = money / burgerPrice;
    return burgerQuantity;
}

var amount = 1000;
var burger = bringBurger(amount);
console.log(burger);
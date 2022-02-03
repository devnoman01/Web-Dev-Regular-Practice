var computer = {
    price: 50000,
    storage: '256gb',
    color: 'silver',
    processor: 'intel i5'
}

var computerPrice = computer.price;

//  set object property value
computer.price = 45000;
console.log(computer);

//  different way to set object property value
//  method-1
computer.price = 45000;
//  method-2
computer["price"] = 45000;
//  method-3
var newPrice = "price";
computer[newPrice] = 60000;

computer.storage = "240gb";
console.log(computer.storage);
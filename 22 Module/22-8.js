const products = [
    {name: 'laptop', price: 45000, quantity: 1},
    {name: 'shirt', price: 600, quantity: 5},
    {name: 'watch', price: 1500, quantity: 4},
    {name: 'phone', price: 25000, quantity: 3}
];

let totalPrice = 0;
for(const product of products){
    totalPrice += product.price * product.quantity;
}
console.log(totalPrice);
const phones = [
    {name: 'samsung s10', price: 60000, camera: 108, storage: 256},
    {name: 'xiaomi mi11', price: 45000, camera: 108, storage: 256},
    {name: 'realme gt2', price: 36000, camera: 64, storage: 128},
    {name: 'oppo reno', price: 35500, camera: 64, storage: 128},
];

let cheapest = phones[0];
for(const phone of phones){
    if(cheapest.price > phone.price){
        cheapest = phone;
    }
}

console.log('Cheapest phone is',cheapest.name);
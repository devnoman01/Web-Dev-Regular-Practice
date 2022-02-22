const products = [
    'Dell core i5 9th gen laptop',
    'iphone 13 pro max',
    'Lenovo yoga laptop',
    'HP X360 Premium laptop',
    'Mi 11 pro max',
    'iphone 12 mini'
];

// searching with indexOf()

const searching1 = 'laptop';
const output1 = [];
for(const product of products){
    if(product.indexOf(searching1) != -1){
        output1.push(product);
    }
}
console.log(output1);


// searching with includes()

const searching2 = 'pro max';
const output2 = [];
for(const product of products){
    if(product.includes(searching2)){
        output2.push(product);
    }
}
console.log(output2);


// searching with startswith()

const searching3 = 'iphone';
const output3 = [];
for(const product of products){
    if(product.toLowerCase().startsWith(searching3.toLowerCase())){
        output3.push(product);
    }
}
console.log(output3);



// searching with endswith()

const searching4 = 'mini';
const output4 = [];
for(const product of products){
    if(product.toLowerCase().endsWith(searching4.toLowerCase())){
        output4.push(product);
    }
}
console.log(output4);

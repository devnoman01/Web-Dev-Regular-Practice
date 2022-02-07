const products = [
    {name: 'iphone 13', price: 90000},
    {name: 'hp laptop', price: 55000},
    {name: 'samsung note 21', price: 70000},
    {name: 'apple watch', price: 25000},
    {name: 'xiaomi note 11', price: 60000},
    {name: 'airbuds', price: 20000},
    {name: 'smart watch', price: 6000},
    {name: 'realme buds', price: 3000},
    {name: 'beats headphone', price: 12000}
];

function searchProductsWithName(products, searchValue) {
    const result = [];
    for(const product of products){
        if(product.name.includes(searchValue)){
            result.push(product.name);
        }
    }
    return result;
}
const matchedNameItems = searchProductsWithName(products, 'watch');
console.log(matchedNameItems);


function searchProductsWithPrice(products, searchValue) {
    const result = [];
    for(const product of products){
        if(product.price<searchValue){
            result.push(product.name);
        }
    }
    return result;
}
const matchedPriceItems = searchProductsWithPrice(products,10000);
console.log(matchedPriceItems);
const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
// console.log(bigNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'red' },
    { name: 'mobile phone', price: 180, color: 'blue' },
    { name: 'watch', price: 75, color: 'black' },
    { name: 'note', price: 10, color: 'white' },
    { name: 'glass', price: 20, color: 'black' }

];
const expensive = products.filter(product => product.price > 100);
const blacks = products.filter(product => product.color == "black");
console.log(blacks);


//! find()
const whiteItem = products.find(product => product.color == 'red');
console.log(whiteItem);

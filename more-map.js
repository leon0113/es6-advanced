//! Using map in string array 
const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Holland'];
const output = friends.map(friend => friend.length);
console.log(output);
//? Old system
// const fLength = [];
// for (const friend of friends) {
//     const length = friend.length;
//     fLength.push(length);
// }

// console.log(fLength);

//! Using map in Object
const products = [
    { name: 'water bottle', price: 50, color: 'red' },
    { name: 'mobile phone', price: 80, color: 'blue' },
    { name: 'watch', price: 75, color: 'black' },
    { name: 'note', price: 10, color: 'white' },
    { name: 'glass', price: 20, color: 'gray' }

];
products.map(product => console.log(product));
const productsName = products.map(product => product.name);
console.log(productsName);
//! foreach
products.forEach(product => console.log(product));
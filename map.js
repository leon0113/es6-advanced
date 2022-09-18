const numbers = [4, 6, 8, 10];
const output = [];

// const doubleOld(number){
//     return number * 2;
// }
// type 1
const doubleIt = num => num * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result);
}
// console.log(output);
//! type 2 --- Map

const output2 = numbers.map(doubleIt);
console.log(output2)

// type 3

const output3 = numbers.map(num => num * 3);
console.log(output3);
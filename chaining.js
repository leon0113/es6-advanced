//! declare variable based on the name of an object property
const myObj = { x: 2, y: 34, z: 56, a: 76, b: 50 };
const { x } = myObj;
// console.log(x);


//! destructuring array
const [p, q] = [45, 52, 48];
// console.log(p);

const [best, worst] = [100, 0];
console.log(best);

const cities = ['Dhaka', 'Khulna', 'Chittagong'];
const [first, second] = cities;
// console.log(first, second);


//! Chaining

const company = {
    name: 'GP',
    ceo: { id: 5, name1: 'Alex', age: 25 },
    web: { work: 'website development', employee: 22, framework: 'React', tech: { design: 'css', backend: 'node.js' } },
    location: 'Dhaka'
};
console.log(company?.web?.tech?.backend);
console.log(company?.worng?.tech.backend);
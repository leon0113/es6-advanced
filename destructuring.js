const fish = { id: 58, name: 'Rui', price: 120, phone: 185496454, address: 'Padma', color: 'silver' };
// const phone = fish.phone;
// const price = fish.price;
// console.log(fish.phone);

const { name, phone, color } = fish;

console.log(name);
console.log(phone);
console.log(color);

const company = {
    name: 'GP',
    ceo: { id: 5, name1: 'Alex', age: 25 },
    web: { work: 'website development', employee: 22, framework: 'React', tech: { design: 'css', backend: 'node.js' } },
    location: 'Dhaka'
};

// const work = company.web.work;
// const framework = company.web.framework;

const { work, framework } = company.web;
const { name1, age } = company.ceo;
const { backend } = company.web.tech;
console.log(backend);
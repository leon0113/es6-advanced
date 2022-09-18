//tamplate string
const phone = 'iphone';
const myNotes = `This is my first line.i use ${phone} for 2 years.`
console.log(myNotes);

// default parameter / and parameter is not given by user
function findMax(array = [45, 25]) {
    const max = Math.max(...array);
    return max;
}
const result = findMax();
console.log(result);

//arrow function
const square = x => x * x;
const result1 = square(8);
console.log(result1);
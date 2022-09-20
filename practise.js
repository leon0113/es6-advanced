//! find the 2nd largest number in an array
const nums = [10, 3, 6, 6, 5, 9];
function getSecondLargest(nums) {
    let secondLargest;
    const sorted = nums.sort(function (a, b) {
        return b - a;
    });
    // console.log(sorted);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[0]) {
            secondLargest = nums[i]
            break;
        }
    }
    return secondLargest
}
const output = getSecondLargest(nums);
// console.log(output);



// //! 3rd largest
// function getThirdLargest(nums) {
//     let secondLargest;
//     const sorted = nums.sort(function (a, b) {
//         return b - a;
//     });
//     console.log(sorted);

//     if (nums[1] < nums[0]) {
//         secondLargest = nums[2]

//     };

//     return secondLargest;
// }

// const output1 = getThirdLargest(nums);
// console.log(output1);

// largest element

var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i];
    }
}
console.log(largest);
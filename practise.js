//! find the 2nd largest number in an array
const nums = [10, 3, 6, 6, 5, 9];
function getSecondLargest(nums) {
    let secondLargest;
    const sorted = nums.sort(function (a, b) {
        return b - a;
    });
    console.log(sorted);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[0]) {
            secondLargest = nums[i]
            break;
        }
    }
    return secondLargest
}
const output = getSecondLargest(nums);
console.log(output);
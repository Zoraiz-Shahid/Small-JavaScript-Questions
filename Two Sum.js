// constraints,
// are all numbers +ve or -ve or both
// duplicate numbers?

function twoSum(array, target) {
    for (let i of array) {
        for (let j of array) {
            if (i + j == target) {
                console.log(i, j);
                return
            }
        }
    }
    return false;
}

let array = [1, 3, 7, 9, 2];
let target = 11;
const TwoSum = twoSum(array, target);
console.log(TwoSum);
// array (num)
function runningSum(num) {
    var sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
        num[i] = sum;
    }
    return num;
}

let num = [1, 2, 3, 4];
const test = runningSum(num);
console.log(test);
function arrayFromRange(min, max) {
    let output = [];
    for (let i = min; i <= max; i++) {
        output.push(i);
    }
    return output;
}

const numbers = arrayFromRange(1, 10);
console.log(numbers);
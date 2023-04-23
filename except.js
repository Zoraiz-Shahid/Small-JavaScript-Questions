function except(array, excluded) {
    let output = [];
    for(let element in array) {
        output.push(element);
        if(output.includes(excluded)) {
            output.splice(excluded);
        }
    }
    return output;
}

let array = [1, 2, 3, 4, 5];
let excluded = 1;
const numbers = except(array, excluded);
console.log(numbers);
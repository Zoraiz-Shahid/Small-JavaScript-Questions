// for loop
function includes(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == searchElement) {
            return searchElement;
        }
    }
    return false;
}

// for of loop
function includes1(array, searchElement) {
    for(let element of array) {
        if (element === searchElement) return searchElement;
    }
    return false;
}

let array = [1, 2, 3, 4, 5];
let searchElement = 5;
const numbers = includes(array, searchElement);
const numbers1 = includes1(array, searchElement);
console.log(numbers);
console.log((numbers1));
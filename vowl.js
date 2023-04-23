// return vowl in a given string

function vowl(str) {
    const find = 'aeiou';

    for (let element in str) {
        const toFind = str.charAt(element);

        for (let findElement in find) {
            const vowls = find.charAt(findElement);
            if (toFind == vowls) {
                console.log(vowls);
            }
        }
    }
}

let str = 'abracadabra';
console.log(vowl(str));
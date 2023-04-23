function romanNumber(num) {
    const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

    let result = 0;
    for (let i = 0; i < num.length; i++) {
        const cur = map[num[i]];
        const next = map[num[i + 1]];

        if (cur < next) {
            result += next - cur;
            i++;
        } else result += cur;
    }
    return result;
}

const num = 'IV';
const output = romanNumber(num);
console.log(output);
// with alert
function checkDriverAge() {
    const age = prompt('What is your age?');
    const ageInt = parseInt(age);
    if (ageInt < 18) {
        alert('Sorry, you are too yound to drive this car. Powering off');
    }
    else if (ageInt > 18) {
        alert('Powering On. Enjoy the ride!');
    }
    else if(ageInt === 18) {
        alert('Congratulations on your first year of driving. Enjoy the ride!');
    }
}
checkDriverAge();

// without alert
function checkDriverAge1(age) {
    if (age < 18) {
        console.log('Sorry, you are too yound to drive this car. Powering off');
    }
    else if (age > 18) {
        console.log('Powering On. Enjoy the ride!');
    }
    else if(age === 18) {
        console.log('Congratulations on your first year of driving. Enjoy the ride!');
    }
}
let age = 92;
checkDriverAge1(age);
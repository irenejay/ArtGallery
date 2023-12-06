
function getFee(isMember) {
    // Using if-else statement to determine the fee
    if (isMember) {
        result = 'Member should pay KES 500';
    } else {
        result = 'Member should pay KES 1000';
    }

    // Returning the result
    return result;
}

result = getFee(true);
console.log(result);
function getFeeWithSwitch(isMember) {
    switch (isMember) {
        case true:
            return 'Member should pay KES 500';
        default:
            return 'Member should pay KES 1000';
    }
}

let resultSwitch = getFeeWithSwitch(true);
console.log(resultSwitch);
// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
    const reversed = n.toString().split('').reverse();
    const reversedArr = [];

    for(let i = 0; i < reversed.length; i++) {
        reversedArr.push(parseInt(reversed[i]));
    }
    return reversedArr;
}

console.log(digitize(35231),[1,3,2,5,3]);

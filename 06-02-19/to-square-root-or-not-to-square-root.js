// Write a method, that will get an integer array as parameter and will 
// process every number from this array.
// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// The input array will always contain only positive numbers and will never be empty or null.

// The input array should not be modified!


// function squareOrSquareRoot(array) {
//     const result = [];

//     for(let i = 0; i < array.length; i++) {
//         if(Math.sqrt(array[i]) % 1 === 0) {
//             result.push(Math.sqrt(array[i]));
//         }else {
//             result.push(array[i] * array[i]);
//         }       
//     }

//     return result;
// }

function squareOrSquareRoot(array) {
    
    return result = array.map(num => {
        if(Math.sqrt(num) % 1 === 0) {
            return Math.sqrt(num);
        } else {
            return num * num;
        }
    });
}

console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]), [ 2, 9, 3, 49, 4, 1 ]);


// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:

// 1. The arrays may be of different lengths, with at least one character/digit.
// 2. One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

function mergeArrays(a, b) {
    let i = 1;

    while(b.length > 0) {
        a.splice(i, 0, b[0]);
        b.splice(0,1);
        i += 2;
    }

    return a;

}

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']), [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]);
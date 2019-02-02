// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers.

function invert(array) {

    if (array) {

        //store inverted numbers
        const invert = [];

        for(let i = 0; i < array.length; i++) {
            array[i] === 0 ? invert.push(array[i]) : invert.push(-array[i]);
        }

        return invert;
    }

    return [];
}

function invert(array) {

    if (array) {

        //store inverted numbers
        const invert = [];

        array.forEach(number => number === 0 ? invert.push(number) : invert.push(-number));

        return invert;
    }

    return [];
}

function invert(array) {

    if (array) {

        //store inverted numbers
        const invert = array.map(number => number === 0 ? number : -number);

        return invert;
    }

    return [];
}

console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
console.log(invert([]), []);
console.log(invert([0]), [0])
// Task
// Given a sequence of integers, check whether it is possible to obtain a strictly increasing sequence by erasing no more than one element from it.

// Example
// For sequence = [1, 3, 2, 1], the output should be false;

// For sequence = [1, 3, 2], the output should be true.

// Input/Output
// [input] integer array sequence

// Constraints: 2 ≤ sequence.length ≤ 1000, -10000 ≤ sequence[i] ≤ 10000.

// [output] a boolean value

// true if it is possible, false otherwise.

function almostIncreasingSequence(sequence) {
    let count = 0;

    for(let i = 0; i < sequence.length; i++) {
        if(sequence[i] <= sequence[i - 1]) {
            count++;
            if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                return false;
            }
        }
    }

    return count <= 1;
    
}

console.log(almostIncreasingSequence([1, 2, 3, 1]),true)
console.log(almostIncreasingSequence([1, 3, 2]),true)
console.log(almostIncreasingSequence([4,5,6,1,2,3]),false)
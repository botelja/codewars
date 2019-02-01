// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// function findSmallestInt(args) {
//     args.sort(function(a, b) {
//     return a - b;
//     });
//     return args[0];
// }

function findSmallestInt(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            let swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
          }
        }
    }
    return arr[0];
}

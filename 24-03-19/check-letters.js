// Write a function that checks if the letters in the second string are present in the first:

// letterCheck(["trances", "nectar"]) // true
// letterCheck(["compadres", "DRAPES"]) // true
// letterCheck(["parses", "parsecs"]) //false
// Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array.

function letterCheck(arr) {
    const firstString = arr[0].toLowerCase();
    const letters = arr[1].toLowerCase().split('');
    const helper = [];

    let checkLetters = false;
    
    for(let i = 0; i < letters.length; i++) {
        if(firstString.includes(letters[i])) {
            helper.push(letters[i]);
        }
    }

    if(letters.length === helper.length) {
        checkLetters = true;
    }

    return checkLetters;
}



console.log(letterCheck(["trances", "nectar"]), true);
console.log( letterCheck(["parses", "parsecs"]), false);
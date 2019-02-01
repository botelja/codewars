// Given a string of arbitrary length with any ascii characters. 
// Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct 
// but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", 
// false for it does not.

function spEng(sentence){

    const sentenceLower = sentence.toLowerCase();

    if (sentenceLower.includes('english')) return true;
    return false;
    
}

console.log(spEng("english"), true);
console.log(spEng("egnlish"), false);
console.log(spEng("abcEnglishdef"), true);

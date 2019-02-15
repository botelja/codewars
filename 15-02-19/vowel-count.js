// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    
    vowelsCount = str.split('')
                     .filter(vowel => vowel === 'a' || vowel === 'e' || 
                     vowel === 'i' || vowel === 'o' || vowel === 'u')
                     .length;
    
    return vowelsCount;
}

console.log(getCount("abracadabra"), 5);
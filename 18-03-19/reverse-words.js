// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps

function reverseWords(str) {
    const reverseWords = [];
    const strArr = str.split(' ');
  
    for(let i = 0; i < strArr.length; i++) {
        reverseWords.push(strArr[i].split('').reverse().join(''))
    }

    return reverseWords.join(' ');
}

function reverseWords(str) {

    const strArr = str.split(' ');

    const reverse = strArr.map(word => word.split('').reverse().join(''));

    return reverse.join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
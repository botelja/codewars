// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    const wordArr = s.split(' ');
    const wordLength = [];

    for(let i = 0; i < wordArr.length; i++) {
        wordLength.push(wordArr[i].length);
    }

    wordLength.sort(function(a, b) {
        return a - b;
    });

    return wordLength[0];
}

function findShort(s){
    const wordArr = s.split(' ');
    const wordLength = [];

    for(let i = 0; i < wordArr.length; i++) {
        wordLength.push(wordArr[i].length);
    }

    return Math.min(...wordLength);
}

function findShort(s){
    const wordArr = s.split(' ');
    const shortesWord = wordArr.reduce((firstWord, secondWord) => (firstWord.length > secondWord.length) ? secondWord : firstWord);
    return shortesWord.length;
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
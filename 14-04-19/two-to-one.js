// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    const longest = [];

    const first = s1.split('');
    const second = s2.split('');

    for(let i = 0; i < first.length; i++) {
        if(!longest.includes(first[i])) {
            longest.push(first[i]);
        }
    }

    for(let i = 0; i < second.length; i++) {
        if(!longest.includes(second[i])) {
            longest.push(second[i]);
        }
    }

    return longest.sort().join('');

}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeExclamationMarks(s) {
//     let sArr = s.split('');

//     for(let i = 0; i < sArr.length; i++) {
//         if(sArr[i] === '!') {
//             sArr.splice(i,1);
//         }
//     }

//     return sArr.join('');
// }

function removeExclamationMarks(s) {
    let sArr = s.split('');

    return remove = sArr.filter(char => (char !== '!') ? char : '').join('');
}

console.log(removeExclamationMarks("Hello World!"), "Hello World");
// Write a function to convert a name into initials. This kata strictly
//  takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

// function abbrevName(name){
    
//    const initials = name.match(/[A-Z]/g);   

//    return `${initials[0].toUpperCase()}.${initials[1].toUpperCase()}`;
// }

function abbrevName(name){
    
    const initials = name.split(' ');   
 
    return `${initials[0][0].toUpperCase()}.${initials[1][0].toUpperCase()}`;
}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");
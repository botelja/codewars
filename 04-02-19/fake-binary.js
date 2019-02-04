// Given a string of digits, you should replace any digit 
// below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
    let bin = '';

    for ( let i = 0; i < x.length; i++ ) {
        if( x[i] < 5 ) {
            bin += '0';
        } else if( x[i] >= 5 ) {
            bin += '1';
        }
       
    }

    return bin;
}

function fakeBin(x) {

    let bin = x.split('');

    bin.forEach((number, index) => {
         number < 5 ? bin[index] = '0' : bin[index] = '1'; 
    })

    return bin.join('');
}

function fakeBin(x) {
    return bin = x.split('').map((number) => number < 5 ? '0' : '1').join('');
}



console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101'); 
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011'); 
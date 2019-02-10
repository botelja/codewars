// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
//     const sArr = s.split('');
//     let mumble = '';
    
//     for (let i = 0; i < sArr.length; i++) {
        
//         if (i < (sArr.length - 1)) {
//             mumble += sArr[i].toUpperCase() + sArr[i].repeat(i).toLowerCase() +  '-';
//         } else {
//             mumble += sArr[i].toUpperCase() + sArr[i].repeat(i).toLowerCase();
//         }
        
//     }

//     return mumble;
// }

// function accum(s) {
//     const sArr = s.split('');
//     let mumble = '';
//     let i = 0;
//     for (let char of sArr) {
        
//         if (i < (sArr.length - 1)) {
//             mumble += char.toUpperCase() + char.repeat(i).toLowerCase() +  '-';
//         } else {
//             mumble += char.toUpperCase() + char.repeat(i).toLowerCase();
//         }
//         i++;
        
//     }

//     return mumble;
// }

function accum(s) {
    const sArr = s.split('');

    let mumble = sArr.map((char, i) => char.toUpperCase() + char.repeat(i).toLowerCase());

    return mumble.join('-');
}

console.log(accum("abcd"));
console.log(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
console.log(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggg)gg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
console.log(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
console.log(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
console.log(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
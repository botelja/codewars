// Complete the solution so that it reverses the string value passed into it.

// solution('world'); // returns 'dlrow'

function solution(str) {
  //store reversed string
  let reverse = '';

  for (let i = str.length -1; i >= 0; i--) {
    reverse += str[i];
  }
  
  return reverse;
}

function solution(str) {
    
    return str.split('').reverse().join('');
}

console.log(solution('world') == 'dlrow')
// Sum all the numbers of the array except the highest and the lowest 
// element (the value, not the index!).
// (The highest/lowest element is respectively only one 
// element at each edge, even if there are more than one with the same value!)

// Example:

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6


// If array is empty, null or None, or if only 1 Element exists, return 0.

function sumArray(array) {
    let sum = 0;
    
    if(array instanceof Array){
      for (let i = 0; i < array.length; i++) {
      for (let j = i+1; j < array.length; j++) {
        if(array[i] > array[j]){
          let swap = array[i];
          array[i] = array[j];
          array[j] = swap;
        }
      } 
    }
    array.shift();
    array.pop();
    
    
    for(let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    
    return sum;
    } else {
    return 0;
    }
    
}

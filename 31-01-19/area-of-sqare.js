// Write the function squareArea(A) (square_area($A) in PHP) 
// that finds the area of the red square when you have the 
// length of the circular arc A.

function squareArea(A){
    let radius = (2 * A) / Math.PI;
    return Math.floor((radius * radius) * 100) / 100;
}

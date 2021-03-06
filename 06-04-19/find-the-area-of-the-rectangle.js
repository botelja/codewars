// Find the area of a rectangle when provided with one diagonal and one side of the rectangle. If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". If the resultant area has decimals round it to two places.

function area(d,l){
    if(d <= l) {
        return 'Not a rectangle';
    } else {
        let area;
        let w;
        w = Math.sqrt(d * d - l * l);
        area = w * l;

        return Number(area) === area && area % 1 !== 0 ? Number(area.toFixed(2)) : area;
    }
}

console.log(area(5,4),12);
console.log(area(10,6),48);
console.log(area(13,5),60);
console.log(area(12,5),54.54);
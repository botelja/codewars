// Your task is to make two functions, max and min that take 
// a(n) array of integers list as input and outputs, respectively, 
// the largest and lowest number in that array/vector.

// #Examples

// max([4,6,2,1,9,63,-134,566]) returns 566
// min([-52, 56, 30, 29, -54, 0, -110]) returns -110
// max([5]) returns 5
// min([42, 54, 65, 87, 0]) returns 0
// #Notes

// You may consider that there will not be any empty arrays/vectors.

const min = function(list){
    
    for(let i = 0; i < list.length; i++) {
        for(let j = 1; j < list.length; j++) {
            if (list[i] > list[j]) {
                let swap = list[i];
                list[i] = list[j];
                list[j] = swap;
            }
        }
    }

    return list[0];
}

const max = function(list){

    for(let i = 0; i < list.length; i++) {
        for(let j = 1; j < list.length; j++) {
            if (list[i] < list[j]) {
                let swap = list[i];
                list[i] = list[j];
                list[j] = swap;
            }
        }
    }
    
    return list[0];
}

const minimum = function(list){
    
    let m = list.map(number => number < list[0] ? list[0] = number : list[0]);

    return list[0];
}

const maximum = function(list){
    
    let m = list.map(number => number > list[0] ? list[0] = number : list[0]);

    return list[0];
}


console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(min([42, 54, 65, 87, 0]), 0);
console.log(max([4,6,2,1,9,63,-134,566]), 566);
console.log(max([5]), 5);
console.log(minimum([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(minimum([42, 54, 65, 87, 0]), 0);
console.log(maximum([4,6,2,1,9,63,-134,566]), 566);
console.log(maximum([5]), 5);
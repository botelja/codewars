// Write function avg which calculates average of numbers in given list.

function find_average(array) {
    
    if (array) {

        let average = 0;
        let sum = 0;
        
        for (let i = 0; i < array.length; i++) {

            sum += array[i];
        }

        return average = sum / array.length;
    }

    return 0;
}

function find_average(array) {
    
    if (array) {

        let average = 0;
        let sum = 0;
        
        array.forEach(number => sum += number);

        return average = sum / array.length;;
    }
    
    return 0;
}

console.log(find_average([1,1,1]), 1);
console.log(find_average([1,2,3]), 2);
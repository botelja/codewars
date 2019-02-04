// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

const reverseSeq = n => {

    const reverseArr = [];

    for(let i = n; i > 0; i--) {
        reverseArr.push(i);
    }
    return reverseArr;
};

const reverseSeq = n => {

    const reverseArr = [];

    for(let i = 1; i <= n; i++) {
        reverseArr.push(i);
    }
    return reverseArr.reverse();
};

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);
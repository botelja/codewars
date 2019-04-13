// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
    let strArr = this.split(' ');
    let jadenCaseString = [];

    strArr.forEach((word) => {
        let temp = word.split('');
        temp[0] = temp[0].toUpperCase();
        jadenCaseString.push(temp.join(''));
    });

    return jadenCaseString.join(' ');
};

String.prototype.toJadenCase = function () {
    let jadenCaseString = this.split(' ').map(word => {
        let firstLetterUpper = word.split('');
        firstLetterUpper[0] = firstLetterUpper[0].toUpperCase();
        return firstLetterUpper.join('');
    });

    return jadenCaseString.join(' ');
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

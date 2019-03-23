// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

function swap(st) {
    const stToArray = st.split('');

    for(let i = 0; i < stToArray.length; i++) {
       
        switch(stToArray[i]) {
            case 'a':
                stToArray[i] = stToArray[i].toUpperCase();
                break;
            case 'e':
               stToArray[i] = stToArray[i].toUpperCase();
                break;
            case 'i':
               stToArray[i] = stToArray[i].toUpperCase();
                break;
            case 'o':
               stToArray[i] = stToArray[i].toUpperCase();
                break;
            case 'u':
               stToArray[i] = stToArray[i].toUpperCase();
                break;
        
        }
    }

    return stToArray.join('');
}

function swap(st) {

    const capitalizeVowels = st.split('').map((char) => 
      
        (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') ? char.toUpperCase() : char);

    return capitalizeVowels.join('');
}

function swap(st) {
    return st.replace(/[aeiou]/g, string => string.toUpperCase());
}

console.log(swap("HelloWorld!"),"HEllOWOrld!")
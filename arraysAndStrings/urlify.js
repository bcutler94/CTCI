// Write a method to replace all spaces in a string with '%20', you are given
// the true string length

// time complexity: O(S) -> s = len of string
// space complexity: O(S) -> s = len of string
function urlify (str, len) {
    const regex = /\s/;
    for (let i = 0; i < str.length; i++) {
        if (!regex.test(str[i])) {
            let newStr = '';
            let count = 0;
            while (count < len) {
                const char = str[i + count];
                newStr += regex.test(char) ? '%20' : char;
                count++
            }
            return newStr
        } 
        i++;
    }
    return '';
}

console.log(urlify('ben ', 2))
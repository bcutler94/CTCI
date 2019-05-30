/*
There are three types of edits that can be performed on strings: insert a char,
remove a char or replace a char. Given two strings, determine if they are one
edit away from being equal
*/

// time complexity: O(N + M) -> N and M are lengths of strings
// space complexity: O(N) -> N = length of str1
function oneAway (str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) return false;
    let maxDiff = Math.max(str1.length, str2.length) - 1;
    const freqObj = {};
    for (let char of str1) {
        freqObj[char] = freqObj[char] ? freqObj[char] + 1 : 1;
    }
    for (let char of str2) {
        const exist = freqObj[char] !== undefined;
        if (exist && freqObj[char] > 0) {
            maxDiff--;
            freqObj[char]--;
        }
    }
    return maxDiff === 0;
}

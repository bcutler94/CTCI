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

// time complexity: O(min(N, M)) -> N and M are lengths of strings
// space complexity: O(1) 
function oneAwayOneIteration (str1, str2) {
    if (str1.length === str2.length) {
        return oneReplace(str1, str2);
    } else if (str1.length < str2.length) {
        return oneDelete(str1, str2);
    } else {
        return oneDelete(str2, str1);
    }
}

function oneReplace (str1, str2) {
    let diffCheck = false;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            if (diffCheck) {
                return false;
            } else {
                diffCheck = true;
            }
        }
    }
    return true;
}

function oneDelete (str1, str2) {
    let idx1 = 0;
    let idx2 = 0;
    while (idx1 < str1.length && idx2 < str2.length) {
        if (str1[idx1] !== str2[idx2]) {
            if (idx1 !== idx2) return false;
            idx2++;
        } else {
            idx1++;
            idx2++;
        }
    }
    return true;
}

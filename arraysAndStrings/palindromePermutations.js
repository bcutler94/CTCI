// Given a string determine whether it is a permutation of a palindrome

function palindromePerm (str) {
    const newStr = str.replace(/\s/g, '').toLowerCase();
    const freqObj = {};
    for (let char of newStr) {
        freqObj[char] = freqObj[char] === undefined ? 1 : freqObj[char] + 1;
    }
    let oddCount = 0;
    for (let key in freqObj) {
        if (freqObj[key] % 2 === 1) oddCount++;
        if (oddCount > 1) return false;
    }
    return true;
}

console.log(palindromePerm('Tact coa'))
// Implement algo to see if chars of string are unique, do it with and without
// data structures

// with set
// time complexity: O(s) -> s = length of string
// space complexity: O(s) -> s = length of string
function isUniqueWithSet (string) {
    const set = new Set ();
    for (let char of string) {
        if (set.has(char)) return false;
        set.add(char);
    }
    return true;
}

function isUniqueWithoutSet (string) {
    const arr = string.split('').sort();
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) return false;
    }
    return true;
}

console.log(isUniqueWithoutSet('ben'))
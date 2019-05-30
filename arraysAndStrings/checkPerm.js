// Given two strings, check whether one is a permutation of the other

// with obj
// time complexity: O(s) -> s = length of the strings (must be same)
// space complexity: O(s) -> s = length of strings (for objects created)
function checkPermWithObj (str1, str2) {
    const obj1 = {};
    const obj2 = {};
    if (str1.length !== str2.length) return false;
    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = obj1[str1[i]] ? obj1[str1[i]]++ : 1;
        obj2[str2[i]] = obj2[str2[i]] ? obj2[str2[i]]++ : 1;
    }
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}


// without obj
// time complexity: O(SlogS) -> s = length of strings (must be same);
// space complexity: O(S) -> s = length of strings (since we split and join)
function checkPerm (str1, str2) {
    if (str1.length !== str2.length) return false;
    const sort1 = str1.split('').sort().join();
    const sort2 = str2.split('').sort().join();
    return sort1 === sort2;
}


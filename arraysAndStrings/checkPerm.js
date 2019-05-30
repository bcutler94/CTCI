// Given two strings, check whether one is a permutation of the other

// with obj
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
function checkPerm (str1, str2) {
    const sort1 = 
}

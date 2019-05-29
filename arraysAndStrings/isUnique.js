// Implement algo to see if chars of string are unique, do it with and without
// data structures

function isUnique (string) {
    const set = new Set ();
    for (let char of string) {
        if (set.has(char)) return false;
        set.add(char);
    }
    return true;
}
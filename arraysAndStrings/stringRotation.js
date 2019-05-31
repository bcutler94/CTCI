// Check whether a string is a rotation of one another using one call to
// isSubstring -> which returns true if one string is substring of another

function rotateString (s1, s2) {
    return s1.length !== s2.length && isSubstring(s1, s2 + s2);
}
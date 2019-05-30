// Rotate a matrix 90 degrees

function rotateMatrix (matrix) {
    const len = matrix.length;
    const out = [];
    let i = 0;
    while (i < len) {
        j = len - 1;
        const level = [];
        while (j >= 0) {
            level.push(matrix[j][i]);
            j--;
        }
        out.push(level);
        i++;
    }
    return out;
}

console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// Rotate a matrix 90 degrees

// returns new matrix
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

function rotateMatrixConstantSpace (matrix) {
    let j = 0;
    const len = matrix.length - 1;
    while (j < len - 1) {
        let i = 0;
        while (i < len - j) {
            const tLeft = matrix[j][j + i];
            const tRight = matrix[j + 1][len - j];
            const bRight = matrix[len - j][len - i - j];
            const bLeft = matrix[len - i - j][j];
            matrix[j + 1][len - j] = tLeft;
            matrix[len - j][len - i - j] = tRight;
            matrix[len - i - j][j] = bRight;
            matrix[j][j + i] = bLeft;
            i++
        }
        j++;
    }
}

console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
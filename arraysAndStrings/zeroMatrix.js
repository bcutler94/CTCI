// Given a matrix, convert all columns and rows of an element with 0 to all 0

// time complexity: O(K) -> K = number of elements in matrix (K = M x N)
// space complexity: O(K) -> K = number of elements in matrix (K = M x N)
function zeroMatrix (matrix) {
    const zeroLevel = new Array (matrix[0].length).fill(0);
    const oneLevel = new Array(matrix[0].length).fill(1);
    const [rowSet, colSet] = helper (matrix);
    const output = [];
    let i = 0;
    while (i < matrix.length) {
        if (rowSet.has(i)) {
            output.push(zeroLevel);
        } else {
            const newLevel = oneLevel.map((ele, idx) => {
                return colSet.has(idx) ? 0 : ele;
            })
            output.push(newLevel);
        }
        i++;
    }
    return output;
}

function helper (matrix) {
    const rowSet = new Set ();
    const colSet = new Set ();
    let i = 0;
    while (i < matrix.length) {
        let j = 0;
        while (j < matrix[0].length) {
            if (matrix[i][j] === 0) {
                rowSet.add(i);
                colSet.add(j);
            }
            j++;
        }
        i++;
    }
    return [rowSet, colSet];
}

function zeroMatrixConstantSpace (matrix) {
    const rowBool = rowCheck(matrix);
    const colBool = colCheck(matrix);
    zeroEdit(matrix);
    for (let i = 1; i < matrix[0].length; i++) {
        if (matrix[0][i] === 0) {
            zeroCol(matrix, i);
        }
    }
    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            zeroRow(matrix, i);
        }
    }
    
    if (rowBool) {
        zeroRow(matrix, 0);
    }
    if (colBool) {
        zeroCol(matrix, 0);
    }
    return matrix;
}

function zeroRow(matrix, i) {
    for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
    }
}

function zeroCol (matrix, i) {
    for (let j = 0; j < matrix.length; j++) {
        matrix[j][i] = 0;
    }
}

function zeroEdit (matrix) {
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
}

function rowCheck (matrix) {
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] === 0) return true;
    }
    return false;
}

function colCheck (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) return true;
    }
    return false;
}

console.log(zeroMatrixConstantSpace([[0, 1, 1], [1, 1, 1], [1, 1, 1]]))
console.log(zeroMatrix([[0, 1, 1], [1, 1, 1], [1, 1, 1]]))
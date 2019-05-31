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

console.log(zeroMatrix([[0, 1, 1], [1, 1, 1], [1, 1, 0]]))
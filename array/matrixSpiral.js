const matrix = [
    [6, 7, 8, 10],
    [2, 4, 3, 1],
    [5, 2, 0, 9],
    [9, 7, 3, 5]
]

function matrixSpiral(matrix) {
    let srow = 0;
    let scol = 0;
    let erow = matrix[0].length - 1;
    let ecol = matrix.length - 1;

    const result = [];

    while (srow < erow && scol < ecol) {

        // top

        for (let i = scol; i <= ecol; i++) {
            // console.log(matrix[srow][i]);

            result.push(matrix[srow][i]);
        }

        // right

        for (let i = srow + 1; i <= erow; i++) {
            // console.log(matrix[srow][i]);
            result.push(matrix[i][ecol]);
        }

        // bottton

        for (let i = ecol - 1; i >= scol; i--) {
            // console.log(matrix[erow][i]);
            result.push(matrix[erow][i]);
        }

        // left 

        for (let i = erow - 1; i > srow; i--) {
            // console.log(matrix[i][scol]);
            result.push(matrix[i][scol]);
        }

        srow++;
        scol++

        ecol--;
        erow--;

    }

    console.log(result);
}

matrixSpiral(matrix);


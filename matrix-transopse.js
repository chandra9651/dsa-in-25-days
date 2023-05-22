const matrix = [
    [1,2,45,4],
    [5,8,12,11],
    [51,13,26,5]
];

// transpose of matrix 
//                         row                                            column
const transpose = new Array(matrix[0].length).fill(0).map(()=> new Array(matrix.length).fill(0));


for(let i =0;i<matrix.length;i++){
    for(let j=0;j<matrix[0].length;j++){
        transpose[j][i] = matrix[i][j];
    }
}

console.log(transpose);
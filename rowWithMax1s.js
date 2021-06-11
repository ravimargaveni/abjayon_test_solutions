function rowWithMax1s(mat){
    let maxCountOf1s = 0;
    let index ;
    let r = mat.length;
    let c = mat[0].length;
    for(let i=0; i<r; i++){
        let count =0;
        for(let j = 0;j<c;j++){
            if(mat[i][j]==1){
                count++;
            }
        }
        if (count>maxCountOf1s){
            maxCountOf1s = count;
            index = i
        }
    }
    console.log(index);
}
let mat = [[0, 0, 0, 1],
       [0, 1, 1, 1],
       [1, 1, 1, 1],
       [0, 0, 0, 0]];
rowWithMax1s(mat);
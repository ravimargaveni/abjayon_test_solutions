function rotate(arr,d,n){
    for(var i = 0; i < d;i++){
        var temp;
        temp = arr[0];
        for (var j = 0; j < n - 1; j++){
            arr[j] = arr[j + 1];
        }
        arr[n - 1] = temp;
}
console.log(arr)
}
let arr =[1,2,3,4,5];
let d = 2
let n = arr.length
rotate(arr,d,n)
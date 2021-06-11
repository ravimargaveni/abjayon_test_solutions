function majorityElement(arr)
{
    let n = arr.length
    let majority = 0;
    let index ;
    for(let i = 0; i < n; i++)
    {
        let count = 0;
        for(let j = 0; j < n; j++)
        {
            if (arr[i] == arr[j])
                count++;
        }
        if (count > majority)
        {
            majority = count;
            index = i;
        }
    }
    if (majority > n / 2)
        console.log(arr[index]);
    else
        console.log("No Majority Element");
}
let arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
majorityElement(arr);
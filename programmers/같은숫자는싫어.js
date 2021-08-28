function solution(arr)
{
    var answer = [];
    // const len = arr.length;
    // let tmp = arr[0];
    // answer.push(tmp);
    // for(let i=1;i<len;i++){
    //     if(tmp == arr[i])continue;
    //     else{
    //         tmp = arr[i];
    //         answer.push(tmp);
    //     }
    // }
    answer = arr.filter((el , idx)=> el != arr[idx+1]);
    return answer;
}

let arr = [1,1,3,3,0,1,1];
console.log(solution(arr));
// ??
const solution = (arr) =>{
  const sum = arr.reduce((acc,cur)=>acc+cur, 0)
  for(let i=0;i<arr.length-1;i++){
    let flag =false;
    const t1 = arr[i];
    for(let j=i+1; j<arr.length+1;j++){
      const t2 = arr[j];
      if(sum - (t1+t2)===100){
        arr.splice(j, 1);
        arr.splice(i, 1);
        flag = true;
      }
    }
    if(flag) return arr;
  }
  return arr;
}


// ▣ 입력예제 1 
// 20 7 23 19 10 15 25 8 13
// ▣ 출력예제 1
// 20 7 23 19 10 8 13

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
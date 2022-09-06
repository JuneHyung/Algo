
const getSum = (k, arr, idx) => {
  let sum = 0;
  for(let i=idx;i<idx+k;i++){
    sum+=arr[i];
  }
  return sum;
} 


const solution = (k, arr) =>{
  let answer = Number.MIN_SAFE_INTEGER;
  for(let i=0;i<arr.length-k;i++){
    const sum = getSum(k, arr, i);
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

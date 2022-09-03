
const solution = (n, k, card) => {
  let answer = new Set();
  for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
      for(let k=j+1;k<n;k++){
        answer.add(arr[i] + arr[j] + arr[k])
      } 
    } 
  }
  const result = [...answer].sort((a,b)=> b-a)[k-1]
  return result;
}
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

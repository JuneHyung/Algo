function solution(A,B){
  A.sort((a, b) => { return a - b });
  B.sort((a, b) => { return b - a });
  
  let answer = A.reduce((acc, n, idx) => {return acc+= n*B[idx]},0);

  return answer;
}
let A = [1, 4, 2];
let B = [5, 4, 4];
console.log(solution(A,B));
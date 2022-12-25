const solution = (A,B) => {
  let answer = 0;
  A.sort((a,b)=>a-b);
  B.sort((a,b)=>b-a);

  answer = A.reduce((total, cur, idx)=> total + cur*B[idx], 0)
  return answer;
}

const A = [1,4,2];
const B = [5,4,4];
console.log(solution(A,B));
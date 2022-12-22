// B팀 승률높게
const solution = (A, B) => {
  let answer = 0;
  const len = B.length;
  let left = 0;
  // a의 수를 이길 수 있는 b의 수 중에서 가장 작은 수로 이겨야하므로 정렬
  A.sort((a,b)=> a-b);
  B.sort((a,b)=> a-b);
  for(let i=0;i<len;i++){
    if(A[left] < B[i]){
      answer++;
      left++;
    }
  }
  return answer;
}

const A = [5,1,3,7];
// const A = [2,2,2,2];
const B = [2,2,6,8];
// const B = [1,1,1,1];
console.log(solution(A, B))

const solution = (arr1, arr2) => {
  const answer = [...arr1, ...arr2].sort((a,b)=> a-b)
  return answer;
}
let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));

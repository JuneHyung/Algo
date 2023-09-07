/**
 * 10819 차이를 최대로
 * N개 정수로 이루어진 배열A가 주어진다.
 * 배열 정수순서를 적절히 바꿔서 다음 식의 최댁밧을 구하는 프로그램 구하기.
 * |a[0]-a[1]| + |a[1]-a[2]| + ...|a[n-2]-a[n-1]| + 
 */
// const fs= require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '6',
'20 1 15 8 4 10',
]
const N = Number(input.shift())
const ARR = input.shift().split(' ').map(Number)

const solution = (n, arr) => {
  const visited = Array.from({length:n},()=>false)
  const numArr = [];
  let answer = 0;
  const sum = (arr) => {
    let result = 0;
    for(let i=0;i<n-1;i++) result += Math.abs(arr[i] - arr[i+1])
    return result;
  }
  const dfs = (depth) => {
    for(let i=0;i<n;i++){
      if(depth===n) answer = Math.max(answer, sum(numArr));
      if(!visited[i]){
        visited[i] = true;
        numArr.push(arr[i])
        dfs(depth+1);
        visited[i] = false;
        numArr.pop();
      }
    }
  }
  dfs(0)
  return answer;
}
console.log(solution(N, ARR));
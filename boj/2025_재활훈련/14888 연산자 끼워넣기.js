/**
 * 14888 연산자 끼워넣기
 * N개 수와 수 사이에 끼워넣을 수 있는 연선자가 N-1개 주어진다.
 * 연산자는 + - * /로만 이루어짐.
 * 계산은 앞에서부터 뒤로 진행.
 * 음수 나눗셈의 경우 절대값으로 나누고, 몫에다가 음수를 붙인다.
 * 
 * 만들 수 있는 식의 결과가 최대인 것과 최소인 것 구하기.
 * 
 * 첫줄 N 2~11
 * 둘줄 수열
 * 셋줄 N-1개인 연산자 수: 차례로 덧셈 뺄셈 곱셈 나눗셈의 연산자수
 */
/**
 * 연산자 사용 체크 = oeprator의 개수를 뺏다가 더했다가 하면서 체크.
 * 재귀 dfs = 원소개수 n, 누적합, 현재 위치
 * 연산자 개수가 0보다 크면 각 연산자를 재귀하는 방법. 
 */
// const fs = require('fs')
// const input  =fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '6',
  '1 2 3 4 5 6',
  '2 1 1 1',
]

const N = Number(input[0])
const ARR = input[1].split(' ').map(Number)
const OPERATOR = input[2].split(' ').map(Number);

const solution = (n, arr, operator) => {
  let min = Infinity;
  let max = -Infinity;

  const status = operator.slice();

  const dfs = (n, acc, idx) => {
    if(n===idx){
      min = acc < min ? acc : min;
      max = acc > max ? acc : max;
      return ;
    }
    const cur = arr[idx];

    if(status[0]>0){ // 덧셈
      status[0] -= 1;
      dfs(N, acc+cur, idx+1)  
      status[0] += 1;
    }
    if(status[1]>0){ // 뺄셈
      status[1] -= 1;
      dfs(N, acc-cur, idx+1)  
      status[1] += 1;
    }
    if(status[2]>0){ // 곱셈
      status[2] -= 1;
      dfs(N, acc*cur, idx+1)  
      status[2] += 1;
    }
    if(status[3]>0){ // 나눗셈
      status[3] -= 1;
      if(acc<0 || cur<0) { // 음수인 경우
        dfs(n, -1 * Math.floor(Math.abs(acc) / Math.abs(cur)), idx+1)
      }else{
        dfs(N, Math.floor(acc / cur), idx+1);
      }
      status[3] += 1;
    }
  }

  dfs(n, arr[0], 1)

  const result = [max, min];
  return result.join('\n')
}

console.log(solution(N, ARR, OPERATOR))
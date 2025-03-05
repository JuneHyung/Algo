/**
 * 10773 제로
 * 재현은 잘못된 수를 부를 때 마다 0을 외쳐서 가장 최근에 재민이가 쓴 수를 지우게 시킨다.
 * 모든 수를 받아 적은 후 수의 합을 알고 싶어한다.
 * 
 * 첫줄 : 정수 K 1~10만
 * 둘줄부터 K개 줄에 정수가 1개씩 주어짐. (0~100만사이 값)
 * 정수가 '0'인경우 가장 최근에 쓴 수를 지우고, 아니면 해당 수를 쓴다.
 * 정수가 "0"일 경우에 지울 수 있는 수가 있음을 보장할 수 있다.
 * 
 * 재민이가 최종적으로 적어낸 수의 합을 출력.
 */
/**
 * 1. stack으로 상태 저장
 * 2. 0이 뜨면 pop
 * 3. 마지막 reduce
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '10',
'1',
'3',
'5',
'4',
'0',
'0',
'7',
'0',
'0',
'6',
]
const K = Number(input[0]);
const order = input.slice(1).map(Number)

const solution = (k, order) => {
  const stack = [];
  
  for(let i=0;i<k;i++){
    const num = order[i];
    if(num===0) stack.pop();
    else stack.push(num)
  }

  const result = stack.reduce((a,c)=>a+c, 0);
  return result;
}

console.log(solution(K, order));
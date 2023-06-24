/**
 * 1110 더하기 사이클
 * 0~99일때 당므 연산이 가능.
 * 10보다작으면 0을붙여 2자리로 만들고, 각 자리 숫자를 더한다.
 * 주어진 수의 가장 오른쪽 수와 앞에서 구한 합의 가장 오른쪽자리 수를 이어 붙여 새로운 수를 만들 수 있다.
 * 26 => 6 + (2+6) => 68 => 84 => 42 => 26
 * 사이클의 길이는 4;
 * N이주어질때 N의 사이클의 길이를 구하시오.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '26'
const N = Number(input);


const solution = (n) => {
  let cnt = 0;
  let changed = n;
  while(true){
    cnt++;
    const lt = Math.floor(changed/10);
    const rt = changed%10;
    const sum = lt+rt;

    changed = (rt)*10 + sum%10;
    
    if(changed===n) break;
  }
  return cnt;
}
console.log(solution(N))
/**
 * 1940 주몽
 * 갑옷을 만들 때 두 재료의 합이 M인 경우 만들어진다.
 * N개 재료가 주어지면, 갑옷을 몇개나 만들 수 있는지 알아보자.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '6',
'9',
'2 7 4 1 5 3',
]

const N = Number(input.shift())
const M = Number(input.shift())
const ARMOR = input.shift().split(' ').map(Number);

const solution = (n, m, armor) => { 
  armor.sort((a,b)=>a-b);
  let lt = 0;
  let rt = n - 1;
  let answer = 0;
  while (lt < rt) {
    const sum = armor[lt] + armor[rt];
    if (sum === m) {
      answer++;
      lt++;
      rt--;
    }
    else if (sum < m) lt++;
    else rt--;
  }
  return answer;
}

console.log(solution(N, M, ARMOR));

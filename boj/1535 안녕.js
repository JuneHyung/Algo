/**
 *
 * 1535 안녕
 * 입원동안 자기를 생각해준 사람들에게 감사하다 할 차례다
 * N명있는데
 * i번 사람에게 인사를 하면 L[i]만큼 체력잃고 j[i]만큼 기쁨을 얻는다
 * 1번만 말할 수 있다.
 * 주어진 체력 내에서 최대한의 기쁨을 느끼는 거이다.
 * 체력은 100 기쁨은 0
 * 체력이 0이나 음수가되면 죽는다.
 * 세준이가 얻을 수 있는 최대 기쁨을 구하시오.
 * 
 * i번째 물건을 넣을 수 없다.
 * => i-1개 물건들을 갖고 구한 전 단계의 값을 그대로 가져온다.
 * 
 * i번째 물건을 넣을 수 있다.
 * => max(i-1개 물건들을 갖고 구한 전 단계값, i번째 물건만큼의 무게르 ㄹ비웠을때 값 + i 번쨰 물건)
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n)
const input = [
  '3',
'1 21 79',
'20 30 25',
]
const N = Number(input.shift());
const HP = [0, ...input.shift().split(' ').map(Number)];
const PLEASURE = [0, ...input.shift().split(' ').map(Number)];

const solution = (n, hp, pleasure) => { 
  const dfs = (energy, idx) => { 
    if (idx === n) return 0;
    let hi = 0; // 인사한 경우 기쁨
    let noHi = 0; // 인사안한 경우 기쁨
    if (energy - hp[idx + 1] > 0) { 
      hi = dfs(energy - hp[idx + 1], idx + 1) + pleasure[idx + 1];
    }
    noHi = dfs(energy, idx + 1);
    return Math.max(hi, noHi);
  }
  const answer = dfs(100, 0)
  return answer;
}
console.log(solution(N, HP, PLEASURE))
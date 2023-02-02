/**
 * 16472 고냥이
 * 인식할 수 있는 글자 수 N
 * 문자열
 * 인식할 수 있는 문자열의 최대 길이 구하기
 */

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '2',
  'abbcaccba',
]
const N = Number(input.shift())

const solution = (n, str) => {
  let lt = 0;
  let rt = 0;
  const alpha = new Map();
  let answer = Number.MIN_SAFE_INTEGER;
  while (lt <= rt && rt < str.length) {
    const cur = str[rt];
    alpha.has(cur) ? alpha.set(cur, alpha.get(cur) + 1) : alpha.set(cur, 1);
    // console.log('before');
    // console.log(alpha);
    while (alpha.size > N) {
      alpha.get(str[lt]) === 1 ? alpha.delete(str[lt]) : alpha.set(str[lt], alpha.get(str[lt]) - 1);
      lt++;
    }
    // console.log('after');
    // console.log(alpha);
    answer = Math.max(answer, rt - lt + 1);
    rt++;
    // console.log(lt, rt, answer)
    // console.log();
  }
  return answer;
}

console.log(solution(N, input.shift()));
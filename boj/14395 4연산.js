/**
 * 14395 4연산
 * s를 t로 바꾸는 최소 연산 횟수
 * s가 1이상이라 -가 안옴.
 * 순서 : *, +, -, /
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(el=>Number(el));
const input = [7, 392] // +*+
const [S, T] = input
const solution = (S, T) => {
  let answer = 0;
  if (S === T) return answer;
  const history = new Set();
  const q = [
    { now: S * S, str: `*` },
    { now: S + S, str: `+` },
    { now: 1, str: `/` },
  ]

  while (q.length !== 0) {
    const { now, str } = q.shift();
    if (now === T) return str;
    if (history.has(now)) continue;
    history.add(now);

    if (now * now <= T) q.push({ now: now * now, str: `${str}*` });
    if (now + now <= T) q.push({ now: now + now, str: `${str}+` });
  }
  return -1;

}
console.log(solution(S, T));
/* 예상 대진표 */
const solution = (n, a, b) => {
  let answer = 0;
  let lt = Math.min(a, b);
  let rt = Math.max(a, b);
  while (true) {
    if (rt - lt < 1) break;
    if (lt % 2 !== 0) lt++;
    if (rt % 2 !== 0) rt++;
    lt /= 2;
    rt /= 2;
    answer++;
  }

  return answer;
}

const n = 8;
const a = 4;
const b = 7;
console.log(solution(n, a, b));
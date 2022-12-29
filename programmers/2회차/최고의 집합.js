/* 최고의 집합*/
const getList = (n, s) => {
  let mod = s % n;
  const mok = Math.floor(s / n);
  let result = Array.from({ length: n }, () => mok);
  let idx = n - 1;
  while (mod > 0) {
    result[idx]++;
    idx--;
    mod--;
  }
  return result;
}
const solution = (n, s) => {
  if (n > s) return [-1];
  const answer = getList(n, s);
  return answer;
}

const n = 2;
const s = 9;
console.log(solution(n, s))
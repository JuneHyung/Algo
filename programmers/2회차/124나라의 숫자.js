/**124나라의 숫자
 * 
 * 1 1
 * 2 2
 * 3 4
 * 4 11
 * 5 12
 * 6 14
 * 7 21
 * 8 22
 * 9 24
 * 10 41
 * 11 42
 * 12 44
 * 13 111
 * 14 112
 * 15 114
 * 
 * 9의 경우 3x3이 아닌 3x2 + 3이 되야해서 루프마다 -1이 필요.
 */
const solution = (n) => {
  let answer = '';
  const arr = [4, 1, 2];
  while (n !== 0) {
    answer = arr[n % 3] + answer;
    n = Math.floor((n - 1) / 3)
  }
  return answer;
}

// const n = 1; // 1
// const n = 2; // 2
// const n = 3; // 4
// const n = 4; // 11
const n = 3;
console.log(solution(n))
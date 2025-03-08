/**
 * 9012 괄호
 * 주어진 문자열이 올바른 괄호인지 판단해서 YES와 NO로 나타내기
 *
 * 첫줄 테케T
 * 둘줄부터 문자열
 *
 * 올바른 괄호문자열이면 YES 아니면 NO 출력
 */
/**
 * 1. 길이가 홀수면 X
 * 2. 시작이 ) 면 X
 * 3. (면 push, )면 pop
 * 4. 남은게 있으면 X.
 * 5. 남은게 없으면 O.
 */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

const solution = (str) => {
  const len = str.length;
  if (len % 2 !== 0) {
    return "NO";
  }
  if (str[len - 1] === ")") {
    return "NO";
  }

  const saved = [];

  for (let i = 0; i < len; i++) {
    const cur = str.pop();
    if (saved.length === 0 && cur === ")") return "NO";
    if (cur === "(") {
      saved.push(cur);
    } else {
      saved.pop();
    }
    // console.log(saved);
  }

  return saved.length === 0 ? "YES" : "NO";
};

for (let t = 1; t <= T; t++) {
  const str = input[t].split("").reverse();

  console.log(solution(str));
}

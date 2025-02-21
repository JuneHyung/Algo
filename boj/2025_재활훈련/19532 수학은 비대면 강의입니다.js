/**
* 19532 수학은 비대면 강의입니다.
* 연립방적식에서 xy값계산
* -999 ~ 999정수만 입력할 수 있다.
*
* a, b, c, d, e ,f 가 공백으로 주어진다.
* x,y가 주어지고,
*
* 답 x, y,를 출력
*/

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();
const input = `1 3 -1 4 1 7`;
const numList = input.split(" ").map(Number);

const solution = (numList) => {
  const [a, b, c, d, e, f] = numList;

  // ax + by = c
  // dx + ey = f
  let result = [];
  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      const sum1 = a * x + b * y;
      const sum2 = d * x + e * y;

      if (sum1 === c && sum2 === f) {
        result = [x, y];
      }
    }
  }

  return result.join(" ");
};

console.log(solution(numList));
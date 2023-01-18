/**
 * 1461 도서관
 * 음수 양수 구분하여 듈 즁 더 큰값을 가진 배열을 마지막에 처리하는 것이 이득. 
 * => 돌아올 필요가 없으므로.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const [N, M] = input[0].split(' ').map(el=>Number(el));
// const positions = input[1].split(' ').map(el=>Number(el));

// const [N, M] = [7, 2];
// const positions = [-37, 2, -6, -39, -29, 11, -28];

// 158
// const [N, M] = [8, 3];
// const positions = [-18, -9, -4, 50, 22, -26, 40, -45];

// 29
// const [N, M] = [6, 2];
// const positions = [3, 4, 5, 6, 11, -1];

// 1
const [N, M] = [1, 50];
const positions = [1];


const solution = (N, M, positions) => {
  const positive = positions.filter(el => el > 0).map(el => el).sort((a, b) => b - a).filter((_, idx) => idx % M === 0);
  const negative = positions.filter(el => el < 0).map(el => Math.abs(el)).sort((a, b) => b - a).filter((_, idx) => idx % M === 0);

  console.log(positive)
  console.log(negative)


  let posSum = positive.reduce((acc, cur) => acc + cur * 2, 0);
  let negSum = negative.reduce((acc, cur) => acc + cur * 2, 0);

  const posMax = positive.length > 0 ? positive[0] : 0;
  const negMax = negative.length > 0 ? negative[0] : 0;

  const answer = posMax > negMax ? posSum + negSum - positive[0] : posSum + negSum - negative[0]
  return answer;
}
console.log(solution(N, M, positions));
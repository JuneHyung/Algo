/**
 * 11660 구간 합 구하기 5
 * 
 * NxN크기 표에 수가 채워져있다.
 * x1, y1 ~ x2, y2까지 합을 구하는 프로그램 작성.
 * 
 * 첫줄 표의 크기 N과 합을 구하는 횟수 M
 * 둘줄부터 표에 채워진 수가 주어진다.
 * M번 반복해서 주어진다.
 * 
 * x1,y1 ~ x2,y2까지 합을 구해 출력한다.
 */
/**
 * 구간 합 구하기 4처럼 누적 후 y차이만큼 반복하면서 구간 합 구하기
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '4 3',
//   '1 2 3 4',
//   '2 3 4 5',
//   '3 4 5 6',
//   '4 5 6 7',
//   '2 2 3 4',
//   '3 4 3 4',
//   '1 1 4 4',
// ]
const input = [
  '2 4',
  '1 2',
  '3 4',
  '1 1 1 1',
  '1 2 1 2',
  '2 1 2 1',
  '2 2 2 2',
]

const [N, M] = input[0].split(' ').map(Number);
const BOARD = Array.from({ length: N }, () => []);

for (let i = 0; i < N; i++) {
  const line = input[i + 1].split(' ').map(Number);
  BOARD[i] = [...line];
}

const ACC = Array.from({ length: N + 1 }, () => Array.from({ length: N + 1 }, () => 0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    ACC[i][j] = ACC[i][j - 1] + BOARD[i - 1][j - 1];
  }
}

const solution = (n, m, acc) => {
  const result = [];
  for (let i = n + 1; i < n + 1 + m; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number)

    let sum = 0;
    for (let j = x1; j <= x2; j++) {
      sum += acc[j][y2] - acc[j][y1 - 1]
    }
    result.push(sum);
  }

  return result.join('\n')
}

console.log(solution(N, M, ACC));
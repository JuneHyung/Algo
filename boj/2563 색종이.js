/**
 * 2563 색종이
 * 가로 세로 100크기의 도화지가 있다.
 * 색종이는 가로세로 크기가 10이다.
 * 색종이를 여러장 붙이고 검은 영역의 넓이를 구하자.
 * 왼쪽변과 도화지의 왼쪽변 사이의 거리, 아래쪽변과 아래쪽변 사이의 거리가 주어진다.
 * 색종이가 도화지 밖으로 나가는 경우는 없다.
 */
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = [
  '3',
'3 7',
'15 7',
'5 2',
]
const T = Number(input.shift());
const INFO = input.map(el=>el.split(' ').map(Number));
const solution = (t, info) => {

  const makeBoard = () => {
    const result = Array.from({ length: 101 }, () => Array.from({ length: 101 }, () => 0));
    for (let i = 0; i < t; i++) {
      const [x, y] = info[i];
      for (let i = y; i < y + 10; i++) {
        for (let j = x; j < x + 10; j++) {
          result[i][j] = 1;
        }
      }
    }
    return result;
  };

  const sumArea = () => {
    let sum = 0;
    for (let i = 0; i < 101; i++) {
      for (let j = 0; j < 101; j++) {
        sum += board[i][j];
      }
    }
    return sum;
  };

  const board = makeBoard();
  const answer = sumArea();
  return answer;
};
console.log(solution(T, INFO));

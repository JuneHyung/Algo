/**
 * 1780 종이의 개수
 * NxN크기의 행렬로 표현되는 종이가 있고, -1, 0, 1중 하나가 저장되있다.
 * 1. 만약 종이가 모두 같은 수로 되어 있다면 이 종이를 그대로 사용한다.
 * 2. (1)이 아닌 경우에는 종이를 같은 크기의 종이 9개로 자르고, 각각의 잘린 종이에 대해서 (1)의 과정을 반복한다.
 * -1로만 채워진 종이개수 0으로만 채워진 종이개수 1로만 채워진 종이개수 구하기.
 *
 * N은 1~3^7 N은 3^k꼴로 주어진다. -> 3의 배수형태.
 */
/**
 * 1. 모두 같은지 체크
 * 2. 다르면 n/3만큼 다시 반복.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '9',
  '0 0 0 1 1 1 -1 -1 -1',
  '0 0 0 1 1 1 -1 -1 -1',
  '0 0 0 1 1 1 -1 -1 -1',
  '1 1 1 0 0 0 0 0 0',
  '1 1 1 0 0 0 0 0 0',
  '1 1 1 0 0 0 0 0 0',
  '0 1 -1 0 1 -1 0 1 -1',
  '0 -1 1 0 1 -1 0 1 -1',
  '0 1 -1 1 0 -1 0 1 -1',
];
const N = Number(input[0]);
const BOARD = input.slice(1).map((el) => el.split(' ').map(Number));

const solution = (n, board) => {
  const count = {
    '-1': 0,
    '0': 0,
    '1': 0,
  };


  const checkAllSame = (x, y, len) => {
    const start = board[x][y];
    for (let i = x; i < x + len; i++) {
      for (let j = y; j < y + len; j++) {
        if (board[i][j] !== start) {
          return false;
        }
      }
    }
    return true;
  };

  const divide = (x, y, len) => {
    // 1. 모두 같은지 체크
    if (checkAllSame(x, y, len)) {
      count[board[x][y]]++;
      return;
    }

    // 2. 다르면  /3
    const divideLen = len / 3;
    for (let dx = 0; dx < 3; dx++) {
      for (let dy = 0; dy < 3; dy++) {
        const nx = x + dx * divideLen;
        const ny = y + dy * divideLen;
        divide(nx, ny, divideLen);
      }
    }
  };

  divide(0, 0, n);
  
  const result = Object.entries(count).sort((a,b)=>a[0]-b[0]).map(el=>el[1]);
  return result.join('\n');
};

console.log(solution(N, BOARD));

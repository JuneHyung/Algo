/**
 * 9663 N-Queen
 * NxN체스판 위에 퀸 N개를 서로 공격할 수 없게 놓는 문제.
 * 퀸을 놓는 방법의 수 구하기.
 */
/**
 * https://namu.wiki/w/퀸(체스)
 * 퀸은 상하좌우대각선으로 움직인다.
 */
/**
 * 서로 공격할 수 없게 둘 때 각 위치값 x, y는 겹치지 않는다.
 * 현재 x, y가 가능한지 체크하고 가능하다면, x, y, 현재번호값을 저장.
 * 구현 부분 다른 코드 참고.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = '5';
const N = Number(input);

const solution = (n) => {
  const storage = [];
  let cnt = 0;
  let num = 0;

  const isPossible = (x, y) => {
    for (const [row, col, val] of storage) {
      if (row === x || col === y) return false;
      if (Math.abs(row - x) === Math.abs(col - y)) return false; // 대각선, 대각선위치는 x좌표차이와 y좌표차이가 같다.
    }
    return true;
  }

  const queen = (row) => {
    if (row === n) {
      cnt++;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (isPossible(row, i)) {
        storage.push([row, i, num])
        num++;
        queen(row + 1, i);
        num--;
        storage.pop();
      }
    }
  }

  queen(0);
  return cnt;
}

console.log(solution(N));

/*
N = 5

1 (0,0)
1 1 1 1 1
1 1 0 0 0
1 0 1 0 0
1 0 0 1 0
1 0 0 0 1

2 (1,2)
1 1 1 1 1
1 1 2 2 2
1 2 1 2 0
1 0 2 1 2
1 0 2 0 1

3 (2, 4)
1 1 1 1 1
1 1 2 2 2
1 2 1 2 3
1 0 2 1 2
1 0 2 0 1

4 (3, 1)
1 1 1 1 1
1 1 2 2 2
1 2 1 2 3
1 4 2 1 2
1 4 2 0 1

5 (4, 3)
1 1 1 1 1
1 1 2 2 2
1 2 1 2 3
1 4 2 1 2
1 4 2 5 1


1 (0, 0)
2 (1, 2)
3 (2, 4)
4 (3, 1)
5 (4, 3)
x좌표 y좌표가 겹치지 않는다.
*/
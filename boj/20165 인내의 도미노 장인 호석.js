/**
 * 20165 인내의 도미노 장인 호석
 * 1. MxN 2차원 격자 1~5이하 높이를 가짐.
 * 2. 공격수 공격 후 수비수 수비
 * 3. 동서남북중 한방향으로 넘어뜨림. 길이가 K라면, K-1개 도미노중 아직 넘어지지 않은 것들이 같은 방향으로 넘어짐.
 * 이미 넘어진 도미노가 있으면 공격 후 나니모낫카타
 * 4. 수비수는 넘어진 것 주엥 하나 세움. 넘어지지 않은거라면 나니모낫카타
 * 5. R번 라운드동안 3번 4번 반복.
 * 
 * 첫 줄에 공격수의 점수를 출력하고, 게임판의 상태를 N줄에 걸쳐 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '5 5 3',
//   '1 1 1 1 1',
//   '1 2 2 1 1',
//   '3 1 2 2 2',
//   '1 3 2 1 1',
//   '1 3 3 1 1',
//   '3 1 E',
//   '3 5',
//   '5 3 N',
//   '3 3',
//   '5 2 N',
//   '3 1',
// ]
const input = [
  '3 3 3',
  '3 3 3',
  '3 3 3',
  '3 3 3',
  '1 1 E',
  '1 1',
  '1 2 S',
  '1 2',
  '1 3 S',
  '1 3',
]
const [N, M, R] = input[0].split(' ').map(Number);
const INFO = input.slice(1, N + 1).map(el => el.split(' ').map(Number));
const BOARD = Array.from({ length: N + 1 }, () => Array.from({ length: M + 1 }, () => 0))
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    BOARD[i + 1][j + 1] = INFO[i][j];
  }
}
const COMMANDS = input.slice(N + 1).map(el => el.split(' '));

const solution = (n, m, r, board, commands) => {
  const status = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 'S'));
  const beforeStatus = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 'S'));
  const attacks = commands.filter((el, idx) => idx % 2 === 0)
  const defences = commands.filter((el, idx) => idx % 2 !== 0)
  let sum = 0;

  const inRangeX = (x) => x > 0 && x <= n;
  const inRangeY = (y) => y > 0 && y <= m;

  const goEast = (x, y, len) => {
    if (status[x][y] === 'F') return;
    status[x][y] = 'F';
    for (let i = y + 1; i < y + len; i++) {
      if (inRangeY(i)) {
        if (status[x][i] !== 'F') {
          goEast(x, i, board[x][i])
          status[x][i] = 'F';
        }
      }
    }
  }

  const goWest = (x, y, len) => {
    if (status[x][y] === 'F') return;
    status[x][y] = 'F';
    for (let i = y + 1; i > y - len; i--) {
      if (inRangeY(i)) {
        if (status[x][i] !== 'F') {
          goWest(x, i, board[x][i]);
          status[x][i] = 'F';
        }
      }
    }
  }

  const goSouth = (x, y, len) => {
    if (status[x][y] === 'F') return;
    status[x][y] = 'F';
    for (let i = x + 1; i < x + len; i++) {
      if (inRangeX(i)) {
        if (status[i][y] !== 'F') {
          goSouth(i, y, board[i][y]);
          status[i][y] = 'F';
        }
      }
    }
  }

  const goNorth = (x, y, len) => {
    if (status[x][y] === 'F') return;
    status[x][y] = 'F';
    for (let i = x + 1; i > x - len; i--) {
      if (inRangeX(i)) {
        if (status[i][y] !== 'F') {
          goNorth(i, y, board[i][y]);
          status[i][y] = 'F';
        }
      }
    }
  }

  const copyStatus = () => {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        beforeStatus[i][j] = status[i][j];
      }
    }
  }

  const calculateScore = () => {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (status[i][j] === 'F' && beforeStatus[i][j]==='S') sum++;
      }
    }
    copyStatus();
  }

  for (let t = 0; t < r; t++) {
    const [ac, ar, aDir] = [Number(attacks[t][0]), Number(attacks[t][1]), attacks[t][2]];
    const [dc, dr] = [Number(defences[t][0]), Number(defences[t][1])];

    const aLen = board[ac][ar];

    // console.log(ac, ar, aDir, aLen)

    switch (aDir) {
      case 'E':
        goEast(ac, ar, aLen)
        break;
      case 'W':
        goWest(ac, ar, aLen)
        break;
      case 'S':
        goSouth(ac, ar, aLen)
        break;
      case 'N':
        goNorth(ac, ar, aLen)
        break;
    }

    calculateScore();
    status[dc][dr] = 'S';
  }

  const answer = Array.from({ length: n }, () => Array.from({ length: m }, () => ''))

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      answer[i][j] = status[i + 1][j + 1]
    }
  }
  
  return [sum, answer.map(el => el.join(' ')).join('\n')].join('\n');
}


console.log(solution(N, M, R, BOARD, COMMANDS))


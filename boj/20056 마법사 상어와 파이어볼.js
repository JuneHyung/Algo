/**
 * 20056 마법사 상어와 파이어볼
 * NxN격자에 파이어볼 M개를 발사했다.
 * 처음 파이어볼은 각 위치에서 이동을 대기함.
 * i번 파이어볼 위치는 (ri, ci) - 행열 / 질량은 mi / 방향 di / 속력 si
 * 파이어볼의 방향은 어떤 칸과 인접한 8개 칸의 방향을 의미.
 * 0 - 상
 * 1 - 우상
 * 2 - 우
 * 3 - 우하
 * 4 - 하
 * 5 - 좌하
 * 6 - 좌
 * 7 - 좌상
 *
 * 이동명령시 규칙
 * 1. 모든 파이어볼이 자신의 방향 d로 속력 s칸만큼 이동. => 이동중 같은 칸에 여러 파이어볼 가능
 * 2. 이동 후 2개 이상 파이어볼 칸에 대해서
 * 2-1. 같은 칸에 있는 파이어볼은 모두 하나로 합쳐짐
 * 2-2. 파이어볼은 4개의 파이어볼로 나누어짐
 * 2-3. 나누어진 파이어볼의 질량 속력 방향
 * 2-3-1. 질량은 (합쳐진 파이어볼 질량의 합)/5
 * 2-3-2. 속력은 (합쳐진 파잉어볼 속력의 합)/(합쳐진 파이어볼 수)
 * 2-3-3. 합쳐지는 파이어볼 방향이 모두 홀수거나 짝수면, 방향은 0,2,4,6 / 아니면 1,3,5,7
 * 2-4. 질량이 0인 파이어볼은 소멸되어 없어진다.
 * 이동을 K번명령한 후 남은 파이어볼 질량의 합은?
 *
 * N, M, K
 * M개줄에 파이어볼 정보가 주어진다. (r, c, m, s, d)
 * 두 파이어볼 위치가 같은 경우는 입력으로 안주어짐.
 *
 * K번 명령 후 남은 파이어볼의 질량 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '4 2 2',
// '1 1 5 2 2',
// '1 4 7 1 6',
// ];
const input = [
  '7 5 3',
'1 3 5 2 4',
'2 3 5 2 6',
'5 2 9 1 7',
'6 2 1 3 5',
'4 4 2 4 2',
];
const [N, M, K] = input.shift().split(" ").map(Number);
const INFO = input.map((el) => el.split(" ").map(Number));

const initFireBall = (n, m, k, info, board) => {
  for (let i = 0; i < info.length; i++) {
    const [r, c, m, s, d] = info[i];
    board[r][c].push([m, s, d]);
  }
};

const getFireBallPos = (n, board) => {
  const result = [];
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (board[i][j].length !== 0) {
        for (let k = 0; k < board[i][j].length; k++) {
          const [m, s, d] = board[i][j][k];
          result.push([i, j, m, s, d]);
        }
      }
    }
  }
  return result;
};

const solution = (n, m, k, info) => {
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  const board = Array.from({ length: N + 1 }, () => Array.from({ length: N + 1}, () => []));

  initFireBall(n, m, k, info, board);

  for (let t = 0; t < k; t++) {
    let q = getFireBallPos(n, board);
    let len = q.length;

    // 1 단계
    for (let i = 0; i < len; i++) {
      const [r, c, m, s, d] = q[i];
      const nextX = r + dx[d] * s%n;
      const nextY = c + dy[d] * s%n;
      
      // 1
      const nx = nextX < 1 ? n + nextX : nextX > n ? (1 + nextX-(n+1)) : nextX;
      const ny = nextY < 1 ? n + nextY : nextY > n ? (1 + nextY-(n+1)) : nextY;
      
      board[nx][ny].push([m, s, d]);
      board[r][c].shift();
      q.push([nx, ny, m, s, d]);
    }
    if(q.length!==len){q = q.slice(len)};
    // 2단계
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n; j++) {
        const cnt = board[i][j].length;
        if (cnt > 1) {
          // 2개이상 파이어볼이 있는 칸에서
          // 2-3
          const sumM = board[i][j].reduce((a, c) => a + c[0], 0); // 2-3-1
          const sumS = board[i][j].reduce((a, c) => a + c[1], 0); // 2-3-2
          let resultM = Math.floor(sumM / 5);
          let resultS = Math.floor(sumS / cnt);

          const filteredD = board[i][j].map((el) => el[2]); // 2-3-3 방향판단

          if (resultM === 0) board[i][j] = []; // 2-4
          else {
            const flag = filteredD.filter((el) => el % 2 === 0).length === cnt|| filteredD.filter((el) => el % 2 !== 0).length === cnt;
            if (flag) {
              // 2-3-3 방향이 모두 짝수거나 모두 홀수
              board[i][j] = [
                [resultM, resultS, 0],
                [resultM, resultS, 2],
                [resultM, resultS, 4],
                [resultM, resultS, 6],
              ];
            } else {
              // 2-3-3 방향이 짝수 홀수 섞인거
              board[i][j] = [
                [resultM, resultS, 1],
                [resultM, resultS, 3],
                [resultM, resultS, 5],
                [resultM, resultS, 7],
              ];
            }
          }
        }
      }
    }
  } // for(t)

  

  // 정답 구하기
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (board[i][j].length !== 0) {
        answer += board[i][j].reduce((a, c) => a + c[0], 0);
      }
    }
  }

  return answer;
};

console.log(solution(N, M, K, INFO));

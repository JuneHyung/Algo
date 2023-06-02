/**
 * 14500 테트로미노
 * 폴리오미노란 1x1인 정사각형을 여러개 이어 붙인 도형.
 * 규칙
 * 정사각형은 겹치면 안된다.
 * 도형은 모두 연결되있어야 한다.
 * 정사각형의 변끼리 연결되있어야 한다. 꼭지점과 꼭지점만 맞닿아 있으면 안된다.
 * 
 * 정사각형 4개를 이어 부인 폴리오미노를 테트로미노라 한다.
 * ㅡ ㄴ, 번개, ㅜ, ㅁ 4개모양.
 * 
 * NxM에 테트뢰노를 1개 놓으려한다.
 * 회전이나 대칭을 시켜도 된다.
 * 테트로미노를 놓았을 때 보드의 숫자 합의 최대값을 구하시오.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '4 5',
'1 2 3 4 5',
'1 2 3 4 5',
'1 2 3 4 5',
'1 2 3 4 5',
]
const [N,M] = input.shift().split(' ').map(Number)
const BOARD = input.map(el=>el.split(' ').map(Number))

const solution = (n, m, board) =>{
  let answer = Number.MIN_SAFE_INTEGER;
  const inRange = (x, y) => x>=0 && y>=0 && x<n && y<m;

  const dir = [
    { // ㅡ
      rx: 0,
      ry: 3,
      dx: [0,0,0,0],
      dy: [0,1,2,3]
    },
    { // ㅣ
      rx: 3,
      ry: 0,
      dx: [0,1,2,3],
      dy: [0,0,0,0]
    },
    { // ㅁ
      rx: 1,
      ry: 1,
      dx: [0,1,0,1],
      dy: [0,0,1,1]
    },
    {  // ㄴ - 1
      rx: 2,
      ry: 1,
      dx: [0,1,2,2],
      dy: [0,0,0,1]
    },
    {  // ㄴ - 2
      rx: -1,
      ry: 2,
      dx: [0,0,0,-1],
      dy: [0,1,2,2]
    },
    {  // ㄴ - 3
      rx: -2,
      ry: -1,
      dx: [0,-1,-2,-2],
      dy: [0,0,0,-1]
    },
    {  // ㄴ - 4
      rx: 1,
      ry: -2,
      dx: [0,0,0,1],
      dy: [0,-1,-2,-2]
    },
    {  // ㄴ - 5
      rx: 2,
      ry: -1,
      dx: [0,1,2,2],
      dy: [0,0,0,-1]
    },
    {  // ㄴ - 6
      rx: -1,
      ry: -2,
      dx: [0,0,0,-1],
      dy: [0,-1,-2,-2]
    },
    {  // ㄴ - 7
      rx: -2,
      ry: 1,
      dx: [0,-1,-2,-2],
      dy: [0,0,0,1]
    },
    {  // ㄴ - 8
      rx: 1,
      ry: 2,
      dx: [0,0,0,1],
      dy: [0,1,2,2]
    },
    {  // 번개 - 1
      rx: 2,
      ry: 1,
      dx: [0,1,1,2],
      dy: [0,0,1,1]
    },
    {  // 번개 - 2
      rx: -1,
      ry: 2,
      dx: [0,0,-1,-1],
      dy: [0,1,1,2]
    },
    {  // 번개 - 3
      rx: -1,
      ry: -2,
      dx: [0,0,-1,-1],
      dy: [0,-1,-1,-2]
    },
    {  // 번개 - 4
      rx: -2,
      ry: 1,
      dx: [0,-1,-1,-2],
      dy: [0,0,1,1]
    },
    {  // ㅗ - 1
      rx: 1,
      ry: 2,
      dx: [0,0,1,0],
      dy: [0,1,1,2]
    },
    {  // ㅗ - 2
      rx: -2,
      ry: 1,
      dx: [0,-1,-1,-2],
      dy: [0,0,1,0]
    },
    {  // ㅗ - 3
      rx: 2,
      ry: -1,
      dx: [0,1,1,2],
      dy: [0,0,-1,0]
    },
    {  // ㅗ - 4
      rx: -1,
      ry: -2,
      dx: [0,0,-1,0],
      dy: [0,-1,-1,-2]
    },
  ]

  const getTetromino = (cur) => {
    const [curX, curY] = cur;
    let result = 0;
    for(let i=0;i<dir.length;i++){
      const {rx, ry, dx, dy} = dir[i];
      let sum = 0;
      if(inRange(curX+rx, curY+ry)){
        for(let k=0;k<4;k++){
          const nx = curX + dx[k];
          const ny = curY + dy[k];
          sum += board[nx][ny];
          // if(isNaN(sum)) console.log(curX, curY, nx, ny)
        }
        result = Math.max(result, sum);
      }
    }
    return result;
  }

  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      answer = Math.max(answer, getTetromino([i, j]));
    }
  }

  return answer;
}

console.log(solution(N, M, BOARD))
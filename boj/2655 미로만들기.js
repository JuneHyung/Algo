/**
 * 2655 미로만들기
 * 끝방으로갈 때 최대한 적은 수의 방 색을 바꾸려한다.
 * 0은 검은 방, 1은 흰방을 나타낸다.
 */
// const fs = require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '8',
'11100110',
'11010010',
'10011010',
'11101100',
'01000111',
'00110001',
'11011000',
'11000111',
]
const N = Number(input.shift())
const BOARD = input.map(el=>el.split('').map(Number))

const solution= (n, board) => {
  const visited = Array.from({length: n},()=>Array.from({length: n},()=>Infinity))
  visited[0][0] = 0;
  const q = [[0,0]];
  const dx = [-1,1,0,0]
  const dy = [0,0,-1,1]
  const inRange = (x, y) => x>=0 && y>=0 && x<n && y<n

  while(q.length!==0){
    const [curX, curY] = q.shift();

    for(let k=0;k<4;k++){
      const nx = curX + dx[k];
      const ny = curY + dy[k];
      if(inRange(nx, ny)){
        if(board[nx][ny]===1){
          if(visited[nx][ny] > visited[curX][curY]){
            visited[nx][ny] = visited[curX][curY];
            q.push([nx, ny])
          }
        }else{
          if(visited[nx][ny] > visited[curX][curY]+1){
            visited[nx][ny] = visited[curX][curY]+1;
            q.push([nx, ny])
          }
        }
      }
    }
  }
  const answer = visited[n-1][n-1]
  return answer;
}

console.log(solution(N, BOARD))
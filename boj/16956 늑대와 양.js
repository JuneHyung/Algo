/**
 * 16956 늑대와 양
 * 각 칸에 양 또는 늑대가 있다.
 * 양은 가만있고, 늑대는 인접한 칸을 자유롭게 이동 가능하다.
 * 울타리를 설치해 늑대가 양에게 못가게 하려한다.
 * 울타리를 설치해보자.
 * .는 빈칸, s는 양, w는 늑대
 * 
 * 첫째 줄에 1을 출력하고,
 * 둘째 줄부터 R개의 줄에 목장의 상태를 출력
 * 울타리는 D로 출력한다.
 * 어떻게 설치해도 늑대가 양이있는 곳으로 갈 수 있다면, 0을출력
 * 
 * 출력테케신경X. 그냥 늑대가 양을 못잡으면된다.
 */
// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '6 6',
// '..S...',
// '..S.W.',
// '.S....',
// '..W...',
// '...W..',
// '......',
// ]
const input = [
  '5 5',
'.S...',
'...S.',
'S....',
'...S.',
'.S...',
]
const [R, C] = input.shift().split(' ').map(Number)
const BOARD = input.map(el=>el.split(''))

const solution = (r, c, board) =>{
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const inRange = (x, y) => x>=0 && y>=0 && x<r && y<c;
  for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
      if(board[i][j]==='W'){
        const q = [[i, j]];
        while(q.length!==0){
          const [curX, curY] = q.shift();
          for(let k=0;k<4;k++){
            const nx = curX + dx[k];
            const ny = curY + dy[k];
            if(inRange(nx,ny) && board[nx][ny]==='.'){
              board[nx][ny] = 'D'
            }
            if(inRange(nx,ny) && board[nx][ny]==='S') return 0;
          }
        }
      }
    }
  }
  const result = board.map(el=>el.join('')).join('\n');
  return [1, result].join('\n')
}


console.log(solution(R, C, BOARD))
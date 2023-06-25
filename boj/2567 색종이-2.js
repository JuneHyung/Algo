/**
 * 2567 색종이 - 2
 * 정사각형 모양 10*10 도화지가 있다. 크기는 100x100
 * 색종이는 정사각형임.
 * 여러장의 색종이를 붙이고 검은 영역의 둘레 길이를 구하는 프로그램 작성
 * 첫 줄 : 색종이 수
 * 도화지 왼쪽 변과 색종이 왼쪽변 사이 거리, 아래쪽과 아래쪽 변사이 거리가 주어진다.
 * 색종이가 도화지 밖으로 나가는 경우는 없다.
 * 
 * 둘레길이 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4',
'3 7',
'5 2',
'15 7',
'13 14',
]
const N = Number(input.shift())
const INFO = input.map(el=>el.split(' ').map(Number))

const solution = (n, info) =>{
  console.log(info)
  const board = Array.from({length:101}, ()=>Array.from({length:101},()=> 0));

  for(const [x,y] of info){
    for(let i=y;i<y+10;i++){
      for(let j=x;j<x+10;j++){
        board[i][j] = 1;
      }
    }
  }

  let answer = 0;

  const dx = [-1,1,0,0];
  const dy = [0,0,-1,1];
  const inRange = (x, y) => x>=0 && y>=0 && x<101 && y<101;
  for(let i=0;i<101;i++){
    for(let j=0;j<101;j++){
      if(board[i][j]===1){
        let cnt = 0;
        for(let k=0;k<4;k++){
          const nx = i+dx[k];
          const ny = j+dy[k];
          if(inRange(nx,ny) && board[nx][ny]===0){
            cnt++;
          }
        }
        if(cnt>1) answer+=2;
        else if(cnt===1) answer+=1;
      }
    }
  }
  // console.log(board)
  return answer;
}

console.log(solution(N, INFO))
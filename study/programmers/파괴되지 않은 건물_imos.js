/**
 * 파괴되지 않은 건물
 * NxM행렬 게임맵이있다.
 * 적은 건물들을 공격해 파괴하려한다.
 * 공격받으면 내구도가 감소하고, 0이하되면 파괴된다. (0 부터)
 * 아군은 회복스킬을 사용해 내구도를 높이려 한다.
 * 모든 동작이 끝난 후 파괴되지 않은 건물 개수 구하기
 * 
 * skill정보
 * [type, r1, c1, r2, c2, degree]
 * type은 1일 경우 적공격, 2일경우 회복
 * r1,c1 ~ r2, c2까지 degree만큼 내구도를 낮추거나 높인다.
 * 
 * imos법
 * https://nicotina04.tistory.com/163
 */
const board = [[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]]
const skill = [[1,0,0,3,4,4],[1,2,0,2,3,2],[2,1,0,3,1,2],[1,0,1,3,3,1]]

const solution = (board, skill) =>{
  const n = board.length;
  const m = board[0].length;

  let imosBoard = Array.from({length: n+1},()=>Array.from({length:m+1},()=>0))

  for(let s=0;s<skill.length;s++){
    const [sType, r1, c1, r2, c2, degree] = skill[s];
    // console.log(sType, r1, c1, r2, c2, degree)
    imosBoard[r1][c1] += sType===1 ? -degree : degree
    imosBoard[r1][c2+1] += sType===1 ? degree : -degree
    imosBoard[r2+1][c1] += sType===1 ? degree : -degree
    imosBoard[r2+1][c2+1] += sType===1 ? -degree : degree
    // console.log(imosBoard)
    // console.log();
  }

  for(let i=0;i<n;i++){
    let sum = 0;
    for(let j=0;j<m;j++){
      sum += imosBoard[i][j];
      imosBoard[i][j] = sum;
    }
  }
  // console.log('가로')
  // console.log(imosBoard)
  // console.log();
  for(let j=0;j<m;j++){
    let sum = 0;
    for(let i=0;i<n;i++){
      sum += imosBoard[i][j];
      imosBoard[i][j] = sum;
    }
  }
  // console.log('세로')
  // console.log(imosBoard)
  // console.log();

  let answer = 0;
  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      board[i][j] += imosBoard[i][j];
      if(board[i][j] > 0) answer++;
    }
  }
  return answer;
}

console.log(solution(board, skill))
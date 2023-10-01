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
 */

const doit = (board, skill) =>{
  for(let s=0;s<skill.length;s++){
    const [sType, r1, c1, r2, c2, degree] = skill[s];
    for(let i=r1;i<=r2;i++){
      for(let j=c1;j<=c2;j++){
        board[i][j] = sType===1 ? board[i][j] - degree : board[i][j] + degree;
      }
    }
  }
}

const board = [[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]]
const skill = [[1,0,0,3,4,4],[1,2,0,2,3,2],[2,1,0,3,1,2],[1,0,1,3,3,1]]

const solution = (board, skill) =>{
  doit(board, skill)

  let answer = 0;
  for(const line of board){
    for(const building of line){
      answer = building < 1 ? answer : answer +1
    }
  }
  return answer;
}

console.log(solution(board, skill))
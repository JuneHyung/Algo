/**
 * 카펫
 * Leo는 카펫사러 갔다가 중앙은 노랑 테두리는 갈색으로 칠해진 카펫을 봤다
 * 카펫의 노랑과 갈색으로 색칠된 격자 개수는 기억했지만, 전체 카펫크기는 기억X
 * 갈색 수, 노랑 수가 주어질 때 카펫의 가로 세로크기를 배열에담아 return
 * 
 * brown : 8~5,000
 * yellow : 1~2,000,000
 * 가로길이는 세로길이와 같거나 세로보다 길다.
 * 
 * 1줄일떄 2줄일때 3줄일떄 완탐=> brown+yellow의 약수.
 * 
 * 1. testcase 4, 6, 7 실패 => 18, 6 했을때 8x3이 아닌 6x4출력.
 * 2. list를 돌 때 a, b검사 => yellow가 테두리 안쪽영역이니까 넓이-2 x 높이-2 = yellow
 * 
 */

const solution = (brown, yellow) =>{
  // 합의 약수 구하기.
  const sum = brown + yellow;

  const list = [];
  for(let i=3; i<=Math.floor(sum/2);i++){
    if(sum%i===0) list.push([i, sum/i])
  }
  console.log(list)
  const check = (a,b) => ((a-2) * (b-2)) === yellow;

  for(const [a,b] of list){
    if(a>=b && check(a,b)){
      return [a, b]
    }
  }
}

const borwn = 18;
const yellow = 6;
console.log(solution(borwn, yellow))

/**
 * b: 16, y: 5 / 7x3
 * 0 0 0
 * 0 1 0
 * 0 0 0
 * 
 * b: 10, y: 2 / 4x3 = 12
 * 0 0 0 0
 * 0 1 1 0
 * 0 0 0 0
 * 
 * b: 10, y: 2 / 3x4 = 12 [x]
 * 0 0 0
 * 0 1 0
 * 0 1 0
 * 0 0 0
 * 
 * b: 12, y: 3 / 5x3
 * 0 0 0 0 0
 * 0 1 1 1 0
 * 0 0 0 0 0
 * 
 * b: 10, y: 3 / 3x5 [x]
 * 0 0 0
 * 0 1 0
 * 0 1 0
 * 0 1 0
 * 0 0 0
 * 
 * b: 14, y: 4 / 6x3 = 18
 * 0 0 0 0 0 0
 * 0 1 1 1 1 0
 * 0 0 0 0 0 0
 * 
 * b: 12, y:4 / 4x4 = 16
 * 0 0 0 0
 * 0 1 1 0
 * 0 1 1 0
 * 0 0 0 0
 * 
 * b: 16, y: 5 / 7x3 = 21
 * 0 0 0 0 0 0 0 
 * 0 1 1 1 1 1 0
 * 0 0 0 0 0 0 0
 * 
 * b: 18, y: 6 / 8x3 = 24
 * 0 0 0 0 0 0 0 0
 * 0 1 1 1 1 1 1 0
 * 0 0 0 0 0 0 0 0
 * 
 * b: 14, y: 6 / 5x4 = 20
 * 0 0 0 0 0
 * 0 1 1 1 0
 * 0 1 1 1 0
 * 0 0 0 0 0
 * 
 * b: 14, y: 6 / 4x5 = 20 [x]
 * 0 0 0 0
 * 0 1 1 0
 * 0 1 1 0
 * 0 1 1 0
 * 0 0 0 0 
 */
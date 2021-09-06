// 맨허튼 거리 |x2-x1| + |y2-y1|
// 맨허튼거리 2이하로앉지말기

// P : 사람
// O : 빈자리
// X : 파티션
// 사이에 파티션이 있다면 ok PXP

// 아래 경우도 지킨것
// XP
// PX

// 아래는 지키지 않은 것
// XP
// OP
function solution(places) {
  var answer = [];
  // let map = makeMap(places);
  
  for (let t = 0; t < 5; t++) {
    let map = places[t];
    let flag = true;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (map[i][j] == 'P') {
          if (isValid(i+1, j) && map[i + 1][j] == 'P') flag = false;
          if (isValid(i, j+1) && map[i][j+1] == 'P') flag = false;
          if (isValid(i+2, j) && map[i + 2][j] == 'P' && map[i+1][j] != 'X') flag = false;
          if (isValid(i, j+2) && map[i][j + 2] == 'P' && map[i][j+1] != 'X') flag = false;
          if (isValid(i+1, j+1) && map[i + 1][j + 1] == 'P' && (map[i][j+1] != 'X' || map[i+1][j]!='X')) flag = false;
          if (isValid(i-1, j+1) && map[i - 1][j + 1] == 'P'&& (map[i][j+1] != 'X' || map[i-1][j]!='X')) flag = false;
        }
      }
    }

    flag ? answer.push(1) : answer.push(0)
  }
  return answer;
}
function isValid(x, y) {
  if (x >= 0 && y >= 0 && x < 5 && y < 5) return true;
  return false;
}

let places = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]];
console.log(solution(places));
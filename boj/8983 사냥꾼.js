/**
 * 8983 사냥꾼
 * KOI사냥터에 N마리 동물들이 특정위치에 살고 있다.
 * M개의 사대에서만 사격이 가능
 * x축을 사대라고 했을 때
 * 동물위치 a,b가 주어진다.
 * 사정거리를 L이라 했을 떄 잡을 수 있는 동물수를 출력
 * 사대의 위치 xi와 동물의 위치 (aj, bj) 간의 거리는 |xi-aj| + bj로 계산
 * 첫 줄 : 사대 수 M, 동물 수 N, 사정거리 L
 * 두번째 줄 : M개의 사대위치() x좌표값 들 )
 * N개 줄 : 동물 위치 (x, y)
 * 사대가 겹치는 경우는 x
 * 동물위치 겹치는 경우 x
 * 잡을 수 있는 동물 수를 음수가 아닌 정수로 출력
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '4 8 4',
'6 1 4 9',
'7 2',
'3 3',
'4 5',
'5 1',
'2 2',
'1 4',
'8 4',
'9 4',
]
const [M, N, L] = input.shift().split(' ').map(Number)
const SHOOTINFO = input.shift().split(' ').map(Number)
const ANIMALSINFO = input.map(el => el.split(' ').map(Number));
SHOOTINFO.sort((a, b) => a - b);

const solution = (m, n, l, shootInfo, animalsInfo) => {
  let answer = 0;
  for (const info of animalsInfo) { 
    const [x, y] = info;
    let lt = 0;
    let rt = m - 1;
    while (lt < rt) { 
      let mid = Math.floor((lt + rt) / 2);
      if (shootInfo[mid] < x) lt = mid + 1;
      else rt = mid; 
    }
    const [leftDist, centerDist, rightDist] = [Math.abs(shootInfo[rt - 1] - x) + y, Math.abs(shootInfo[rt] - x) + y, Math.abs(shootInfo[rt + 1] - x) + y]
    if (centerDist <= l) answer++;
    else if (rt + 1 < m && rightDist <= l) answer++;
    else if (rt > 0 && leftDist <= l) answer++;
  }
  return answer;
}

console.log(solution(M, N, L, SHOOTINFO, ANIMALSINFO))
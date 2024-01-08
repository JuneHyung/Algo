/**
 * 2660 회장 뽑기
 * 회장은 회원들 중 점수가 가장 작은 사람이 된다.
 * 어느 회원이 다른 모든 회원이 친구면 1점, 2점이면 다른 모든회원이 친구거나 친구의 친구임.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const input = [
  '5',
  '1 2',
  '2 3',
  '3 4',
  '4 5',
  '2 4',
  '5 3',
  '-1 -1',
]
const N = Number(input[0])
const INFO = input.slice(1, input.length - 1).map(el => el.split(' ').map(Number));
const solution = (n, info) => {
  const point = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => Infinity));
  for(let i=1;i<=n;i++){ point[i][i] = 0; }
  for (let i = 0; i < info.length; i++) {
    const [a, b] = info[i];
    point[a][b] = 1;
    point[b][a] = 1;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if(point[i][j] > point[i][k]+point[k][j]) point[i][j] = point[i][k] + point[k][j];
      }
    }
  }

  let min = Number.MAX_SAFE_INTEGER;
  const result = Array.from({length:n+1},()=>0)
  for(let i=1;i<=n;i++){
    let status = 0;
    for(let j=1;j<=n;j++){
      status = Math.max(status, point[i][j])
    }
    result[i] = status;
    min = Math.min(min, status);
  }

  let cnt = 0;
  const answer = [];
  for(let i=1;i<=n;i++){
    if(result[i]===min){
      cnt++;
      answer.push(i)
    }
  }

  return `${min} ${cnt}\n${answer.join(' ')}`


}

console.log(solution(N, INFO))
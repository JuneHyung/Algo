// 시간초과
// const move = (info, commands, n, m) => {
//   let { x, y } = info
//   const [command, dx] = commands

//   switch (command) {
//     case 0: // 좌
//       y = y - dx < 0 ? 0 : y - dx;
//       break;
//     case 1: // 우
//       y = y + dx >= m ? m - 1 : y + dx;
//       break;
//     case 2: // 위
//       x = x - dx < 0 ? 0 : x - dx;
//       break;
//     case 3: // 아래
//       x = x + dx >= n ? n - 1 : x + dx;
//       break;
//   }
//   return { x, y };
// }

// const check = (cur, x, y) => {
//   if (cur.x === x && cur.y === y) return true;
//   return false;
// }

// const solution = (n, m, x, y, queries) => {
//   let answer = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       let cur = { x: i, y: j }
//       for (let k = 0; k < queries.length; k++) {
//         let commands = queries[k];
//         cur = move(cur, commands, n, m);
//       }
//       answer += check(cur, x, y) ? 1 : 0;
//     }
//   }
//   return answer;
// }

/**
 * 해설참고 : https://velog.io/@gkak1121/프로그래머스-공-이동-시뮬레이션
 * 
 * t시간에서의 집합을 k라 했을 때 t-1시간에서 query[t-1]을 수행했을떄
 * k집합을 나타낼 수 있는 k-1 조합을 찾는것.
 * 
 * n x m 배열에 모두 공이 가득차있고, query를 수행할때마다 dist만큼 기울인다고 생각하는 것이 베이스다.
 * 공은 항상 사각형 형태로 유지되고 쿼리 뒤부터 역으로 가능 후보군을 찾기.
 * 
 * [n, m] = [3, 5]
 * [x, y] = [0, 1]
 * queries = [[3,1],[2,2],[1,1],[2,3],[0,1],[2,1]]
 * rowStart = 0, rowEnd = 0
 * colStart = 1, colEnd = 1
 * queries = 0, 1, 2, 3 => 좌 우 상 하
 * 
 * 1. [2, 1] - 위로 1
 * 행번호가 감소하는 방향이라 rowEnd값이 커져야함.
 * rowStart는 0이므로 유지.
 * rowStart = 0, rowEnd = 1
 * colStart = 1, colEnd = 1
 * 
 * 2. [0, 1] - 좌로 1
 * 열번호가 감소하는 방향이라 colEnd값이 커져야함.
 * colStart는 0이아니므로 dist만큼 커져야함.
 * rowStart = 0, rowEnd = 1
 * colStart = 2, colEnd = 2
 * 
 * 3. [2, 3] - 위로 3
 * rowStart = 0, rowEnd = 1
 * colStart = 2, colEnd = 2 
 * 
 * 4. [1, 1] - 우로 1
 * rowStart = 0, rowEnd = 1
 * colStart = 1, colEnd = 1
 * 
 * 5. [2, 2] - 위로 2
 * rowStart = 0, rowEnd = 1
 * colStart = 1, colEnd = 1
 * 
 * 6. [3, 1] - 아래로 1
 * rowStart = 0, rowEnd = 1
 * colStart = 1, colEnd = 1
 * 
 * row Range 2, col Range 1 => 둘의 곱 2.
 */
/*다시 풀어보기*/
const solution = (n, m, x, y, queries) => {
  let answer = 0;
  let size = queries.length;
  let rowStart=x, rowEnd=x, colStart=y, colEnd=y;
  for(let i=size-1;i>=0;i--){
    const [dir, dist] = queries[i]
    switch(dir){
      case 0: // 열 증가
        if(colStart!=0) colStart += dist;
        colEnd += dist;
        if(colEnd>m-1) colEnd = m-1;
        break;
      case 1: // 열 감소
        colStart -= dist;
        if(colStart<0) colStart = 0;
        if(colEnd!=m-1) colEnd -= dist;
        break;
      case 2: // 행 증가
        if(rowStart!=0) rowStart += dist;
        rowEnd += dist;
        if(rowEnd>n-1) rowEnd = n-1;
        break;
      case 3: // 행 감소
        rowStart -= dist;
        if(rowStart<0) rowStart = 0;
        if(rowEnd!=n-1) rowEnd -= dist;
        break;
    }
    if(rowStart>n-1 || rowEnd<0||colStart>m-1||colEnd<0) return answer;
  }
  answer = BigInt(rowEnd - rowStart + 1) * BigInt(colEnd - colStart + 1);
  return answer;
}


const n = 2;
const m = 2;
const x = 0;
const y = 0;
const queries = [[2, 1], [0, 1], [1, 1], [0, 1], [2, 1]];
console.log(solution(n, m, x, y, queries));
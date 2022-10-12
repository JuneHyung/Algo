// 시간초과
const move = (info, commands, n, m) => {
  let { x, y } = info
  const [command, dx] = commands

  switch (command) {
    case 0: // 좌
      y = y - dx < 0 ? 0 : y - dx;
      break;
    case 1: // 우
      y = y + dx >= m ? m - 1 : y + dx;
      break;
    case 2: // 위
      x = x - dx < 0 ? 0 : x - dx;
      break;
    case 3: // 아래
      x = x + dx >= n ? n - 1 : x + dx;
      break;
  }
  return { x, y };
}

const check = (cur, x, y) => {
  if (cur.x === x && cur.y === y) return true;
  return false;
}

const solution = (n, m, x, y, queries) => {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let cur = { x: i, y: j }
      for (let k = 0; k < queries.length; k++) {
        let commands = queries[k];
        cur = move(cur, commands, n, m);
      }
      answer += check(cur, x, y) ? 1 : 0;
    }
  }
  return answer;
}


const n = 2;
const m = 2;
const x = 0;
const y = 0;
const queries = [[2, 1], [0, 1], [1, 1], [0, 1], [2, 1]];
console.log(solution(n, m, x, y, queries));
/**
 * 25794 초콜릿과 나이트 게임
 * 코코녀석이 ㅋ나이트라는 체스 말을 만들었다.
 * 나이트는 가로1칸 세로2칸 / 세로1칸 가로2칸을 움직인다.
 * ㅋ나이트는 가로X칸 세로Y칸 / 가로Y칸 세로X칸을 움직인다.
 * 
 * 나이트게임은 무한한 초콜릿 격자판에서 진행하는 1인용 게임이다.
 * 매 턴마다 규칙에 맞게 나이트를 이동하고, 원래 나이트가 있던 칸의 초콜릿을 떼서 먹는다.
 * 없는칸으로 나이트를 움직일 수 없고, 더이상 나이트가 못움직이면 종료한다.
 * 한별이에게 ㅋ나이트를 어떻게 움직이면 가장 발리 게임이 끝날지 알려주자.
 * ㅋ나이트는 (0,0) 에서 시작한다. 
 * 
 * X와 Y가 한줄에 순서대로 주어진다.
 * 첫 줄에 이동 횟수 K를 출력..
 * 그 다음 줄에는 ㅋ나이트를 옮길 좌표를 한줄에 하나씩 출력한다.
 * 0,0은 출력X
 * 
 * 1. bfs돌면서 찾기 -> 시간초과
 * 2. ??
 * */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '1 1'
const [X, Y] = input.split(' ').map(Number)

const isVisited = (x, y, visited) => { 
  for (let i = 0; i < visited.length; i++) { 
    const [dx, dy] = visited[i];
    if (x===dx&& y=== dy) return true;
  }
  return false;
}
const solution = (x, y) => {
  const dx = [x, x, -x, -x, y, y, -y, -y];
  const dy = [y, -y, y, -y, x, -x, x, -x];

  let q = [[0, 0, 0, [[0,0]]]];
  let result = 0;
  while (q.length !== 0) { 
    let [curX, curY, cnt, visited] = q.shift();
    let flag = false;
    for (let k = 0; k < 8; k++) { 
      const nx = curX + dx[k];
      const ny = curY + dy[k];
      if (!isVisited(nx, ny, visited)) { 
        let arr = [...visited, [nx, ny]];
        q.push([nx, ny, cnt + 1, arr])
        flag = true;
      }
    }
    if (!flag) { result = [cnt, ...visited]; break; }
  }
  const answer = [result[0], ...result.slice(2).map(el=>el.join(' '))]
  return answer.join('\n');
  // console.log(visited);
}
console.log(solution(X, Y));
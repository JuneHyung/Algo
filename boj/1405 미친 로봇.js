/**
 * 1405 무친 로봇
 * 로봇은 N번의 행동을 취할 것이다.
 * 4개 방향 중 하나를 임의로 선택한다. 그럼 그 방향으로 한 칸 이동한다.
 * 같은 곳을 한 번보다 많이 이동하지 않을 때 로봇의 이동 경로가 단순하다고 한다.
 * (시작하는 위치가 처음 방문한 곳.)
 * 로봇의 이동 경로가 단순할 확률을 구하는 프로그램을 작성.
 * EENE와 ENW는 단순하지만, ENWS와 WWWWSNE는 단순하지 않다.
 * E : 동, W : 서, N : 북, S : 남
 * 첫 줄에 행동 수 N, 동으로 이동할 확률, 서, 남, 북으로 이동할 확률이 주어진다.
 * N은 14보다 작거나 같은 자연수
 * 모든 확률은 100보다 작거나 같은 자연수 또는 0
 * 동서남북이동할 확률을 모두 더하면 100임.
 * 
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '14 25 25 25 25'

const [N, EA, WE, NO, SO] = input.split(' ').map(Number);
const solution = (n, ea, we, no, so) => {
  const dirList = [ea, we, no, so].map(el => el / 100)
  const visited = Array.from({ length: 30 }, () => Array.from({ length: 30 }, ()=>0));
  visited[15][15] = 1;


  const dx = [-1, 1, 0, 0]
  const dy = [0, 0, -1, 1]
  let answer = 0;
  const dfs = (x, y, d, p) => { 
    // console.log(x, y, d, p);
    // 단순한 경로 
    // 같은 곳을 한 번보다 많이 이동하지 않을 때 로봇의 이동 경로가 단순하다고 한다.
    // 2이상이면 단순하지 않을 확률들이니 마지막에 1에서 빼주어 단순한확률 구하기.
    if (visited[x][y] === 2) {
      answer += p;
      return;
    }
    if (d === n) return;
    for (let k = 0; k < 4; k++) { 
      if (dirList[k] !== 0) { 
        const nx = x + dx[k];
        const ny = y + dy[k];
        visited[nx][ny]++;
        dfs(nx, ny, d + 1, p * dirList[k]);
        visited[nx][ny]--;
      }
    }
  }


  dfs(15, 15, 0, 1);
  return (1-answer).toFixed(19);
}
console.log(solution(N, EA, WE, NO, SO));
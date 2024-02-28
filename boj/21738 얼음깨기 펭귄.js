/**
 * 21738 얼음께기 펭귄
 * 얼음은 지지대 역할을 하는 얼음과 일반 얼음 2종류가 존재
 * 지지대 역할을 하는 얼음의 경우 일반 얼음들이 깨지지 않게 해준다.
 * 일반 얼음의 겨우 1개의 지지대만 연결되어 있어도 깨지지 않는다.
 * 펭귄이 올라가 있는 얼음은 2개 이상의 지지대 역할을 하는 얼음이 연결되어 있어야 꺠지지 않는다.
 * 지지대와 연결되있단 것은 지지대로 부터 다른 일반 얼음들을 통해 연결 관계가 이어져 있다는 것을 말한다.
 * 펭귄을 떨어 뜨리지 않고 최대 몇개의 얼음을 깰 수 있는가?
 * 
 * 얼음블록 수 N, 지지대 역할을하는 얼음 수 S, 펭귄 위치한 얼음 P가 주어진다.
 * 1~S번까지 얼음은 지지대 역할을 한다.
 * 
 * 연결정보가 그다음 주어진다.
 * 서로다른 지지대가 펭귄이 올라가 있는 얼음을 거치지 앟고 연결되어 있는 경우는 없다.
 * 
 * 1. 시간초과
 */
// const fs= require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '21 6 12',
  '1 9',
  '1 10',
  '10 12',
  '2 13',
  '13 11',
  '11 12',
  '3 8',
  '8 7',
  '8 12',
  '5 19',
  '5 14',
  '14 12',
  '6 20',
  '6 21',
  '20 15',
  '15 12',
  '4 18',
  '4 17',
  '17 16',
  '16 12',
];
const [N, S, P] = input[0].split(' ').map(Number)
const INFO = input.slice(1).map(el => el.split(' ').map(Number));

const solution = (n, s, p, info) => {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [a, b] of info) {
    graph[a].push(b)
    graph[b].push(a)
  }

  let answer = n - 1;

  const q = [p];
  const visited = Array.from({ length: n + 1 }, () => false);
  visited[p] = true;
  let dist = -1; // 펭귄으롭 ㅜ터 거리
  let poll = 0; // 지지대 개수
  
  while (q.length !== 0 && poll < 2) {
    dist++;
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const cur = q.pop();
      if (cur <= s && poll < 2) {
        answer -= dist;
        poll++;
        continue;
      } else {
        for (const next of graph[cur]) {
          if (!visited[next]) {
            q.unshift(next);
            visited[next] = true;
          }
        }
      }
    }
  }

  return answer
}

console.log(solution(N, S, P, INFO))
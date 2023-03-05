/**
 * 2493 탑
 * N개의 높이가 서로 다른 탑을 수평 직선의 좌에서 우로 차례로 세우고,
 * 각 탑의 꼭대기에 레이저 송신기를 설치함.
 * 수평직선의 왼쪽방향으로 발사하고, 탑 기둥 모두에는 수신장치가 설치 되있다.
 * 하나의 탑에서 발사된 레이저 신호는 가장 먼저 만나는 단 하나의 탑에서만 수신이 가능하다.
 * 6 9 5 7 4인 경우 x, x, 9, 9, 7이 된다.
 * 자기보다 낮은 탑은 수신받지 못한다.
 * 각 레이저 신호를 어디서(몇 번째탑에서) 수신하는지 알아내보자.
 * 
 * 1. 2중 for문 => 시간초과
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '5',
'6 9 5 7 4',
]
const N = Number(input.shift())
const TOWER = input.shift().split(' ').map(Number)

const solution = (n, tower) => { 
  const answer = [];
  const stack = [];
  for (let i = 0; i < n; i++) { 
    const cur = {
      idx: i + 1,
      height: tower[i]
    }
    
    if (stack.length === 0) { 
      stack.push(cur);
      answer.push(0);
      continue;
    }
    if (stack[stack.length - 1].height < cur.height) {
      while (stack.length !== 0) {
        if (stack[stack.length - 1].height > cur.height) {
          break;
        } else { stack.pop(); }
      }
      stack.length === 0 ? answer.push(0) : answer.push(stack[stack.length - 1].idx);
      stack.push(cur);
    } else { 
      answer.push(stack[stack.length - 1].idx);
      stack.push(cur);
    }
  }
  return answer.join(' ');
}

console.log(solution(N, TOWER))

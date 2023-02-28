/**
 * 2206 벽 부수고 이동하기
 * 0 : 이동가능
 * 1 : 이동X
 * 1,1 -> nxm으로 이동하려 할 때 최단경로로 이동하려한다.
 * 이동 중 한개의 벽을 부수고 이동하는 것이 좀 더 경로가 짧아지면, 한개까지 부수고 이동.
 * 가보자
 * 
 * 1. q에 부쉈는지 아닌지에 대한 상태값을 추가해 bfs => 시간초과.
 * 2. 다른 사람코드 참고결과 q를 직접 구현해서 시간초과를 해결했다고 하여 해당 코드 참조. => 10퍼대에서 틀림
 * 3. 아래 반례 상황 발생. (9가아닌 -1이 리턴됨) => visited를 3차원배열로 수정하여 부쉈는지 안부쉈는지 상태관리.
 * Node, Queue 구현 공부필요.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const input = [
  '6 4',
'0000',
'1110',
'1000',
'0000',
'0111',
'0010',
]
// const input = [
//   '2 6',
// '010001',
// '000110',
// ]

class Node {
  constructor(x, y, cnt, boom) {
    this.x = x;
    this.y = y;
    this.boom = boom;
    this.cnt = cnt;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(x, y, cnt, boom) {
    let node = new Node(x, y, cnt, boom);
    if (this.size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }
  shift() {
    let temp = this.head;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return temp;
  }
  get length() {
    return this.size;
  }
}

const [N, M] = input.shift().split(' ').map(Number)
const BOARD = input.map(el => el.split('').map(Number))

const inRange = (x, y) => x>=0 & y>=0 && x<N && y<M


const solution = (n, m, board) => { 
  // console.log(board);
  const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => [false, false]));
  let q = new Queue();
  q.push(0, 0, 1, 1);
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let answer = 0;

  while (q.length !== 0) { 
    let target = q.shift();
    const [curX, curY, cnt, boom] = [target.x, target.y, target.cnt, target.boom];
    console.log(curX, curY, cnt, boom);
    
    if (visited[curX][curY][boom]) continue;
    visited[curX][curY][boom] = true;
    
    if (curX === n - 1 && curY === m - 1) { 
      answer = cnt;
      break;
    }
    for (let k = 0; k < 4; k++) { 
      const nx = curX + dx[k];
      const ny = curY + dy[k];
      let nextBoom = boom
      if (inRange(nx, ny)) {
        if (board[nx][ny] === 1) {
          if (nextBoom) nextBoom = 0;
          else continue;
        }
        q.push(nx,ny, cnt+1, nextBoom)
      }
    }
  }

  return answer===0 ? -1 : answer;
}

console.log(solution(N, M, BOARD))
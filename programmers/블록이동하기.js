/**
 * 로봇 2*1
 * 4칸이 0이면 90도 회전가능. => 시계방향 또는 반시계 방향 좌측을 축 || 우측을 축 = 4가지
 * n*n위치까지 이동하는 것이 목표
 * 로봇이 (N, N) 위치까지 이동하는데 필요한 최소 시간을 return
 * 
 * 한변은 5 ~ 100
 * board는 0또는 1
 * 로봇의 처음 위치는 항상 좌측 상단 (1,1) (1,2)
 * 도착 못 하는 경우는 X
 */
 const getNextPos = (head, tail, board, dist) => {
  // 배열에 그냥 이동(4방)했을때 가능한 경우와 회전한 경우를 배열에 담아 return
  const arr = [];
  const [hx, hy] = head; // head 좌표
  const [tx, ty] = tail; // tail 좌표

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  for (let k = 0; k < 4; k++) {
    const nhead = [hx + dx[k], hy + dy[k]];
    const ntail = [tx + dx[k], ty + dy[k]];
    if (board[nhead[0]][[nhead[1]]] === 0 && board[ntail[0]][[ntail[1]]] === 0) { // head와 tail둘다 방문이 가능하다면
      arr.push({ head: nhead, tail: ntail, dist: dist + 1 });
    }
  }

  const rotate = [1, -1];
  rotate.forEach((value) => { // 회전
    if (hx === tx) { // 가로인 경우
      if (board[hx + value][hy] === 0 && board[tx + value][ty] === 0) { // head와 tail둘다 방문이 가능하다면
        arr.push({ head: [hx, hy], tail: [hx + value, hy], dist: dist + 1 });
        arr.push({ head: [tx + value, ty], tail: [tx, ty], dist: dist + 1 });
      }
    } else { // 세로인 경우
      if (board[hx][hy + value] === 0 && board[tx][ty + value] === 0) { // head와 tail둘다 방문이 가능하다면
        arr.push({ head: [hx, hy], tail: [hx, hy + value], dist: dist + 1 });
        arr.push({ head: [tx, ty + value], tail: [tx, ty], dist: dist + 1 });
      }
    }
  });
  return arr;
};

const solution = (board) => {
  const q = [];
  const N = board.length;
  const newBoard = Array.from({ length: N + 2 }, () => Array(N + 2).fill(1));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      newBoard[i + 1][j + 1] = board[i][j];
    }
  }

  const goal = `${N}${N}`

  q.push({ head: [1, 1], tail: [1, 2], dist: 0 });
  let visit = new Set(["1112"]); // head와 tail
  while (q.length) {
    const { head, tail, dist } = q.shift();
    if (head.join('') === goal || tail.join('') === goal) return dist;
    const nextPos = getNextPos(head, tail, newBoard, dist); //다음 위치로 가능한 위치들의 배열
    for (const next of nextPos) {
      const { head: nextHead, tail: nextTail } = next;
      if (!visit.has(`${nextHead.join('')}${nextTail.join('')}`)) { // visit은 head와 tail좌표를 합친 문자열. 없는경우(방문한적없는) visit추가하고 q에 push
        visit.add(`${nextHead.join('')}${nextTail.join('')}`);
        q.push(next);
      }
    }
  }
};

const board = [[0, 0, 0, 1, 1], [0, 0, 0, 1, 0], [0, 1, 0, 1, 1], [1, 1, 0, 0, 1], [0, 0, 0, 0, 0]];
console.log(solution(board));
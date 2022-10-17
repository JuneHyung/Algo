/** 표편집
 * U X : 현재 행의 X칸 위
 * D X : 현재 행의 X칸 아래
 * C : 선택된 행 삭제 후 바로 아래행 선택. 가장 아래면 바로위 선택
 * Z : 가장 최근에 선택된 행을 원복. 현재 선택된 행은 변화 X.
 * 
 * 표 범위를 벗어나는 이동 없음
 * 복구행이 없는경우 Z는 입력 없음
 */
 function solution(n, k, cmd) {
  let answer = Array.from({ length: n }, () => 'O') // O로 먼저 n만큼 다 채워준다.
  let curNode = new Node(0);
  let prevNode = new Node(0);
  for (let i = 1; i < n; i++) {
    const newNode = new Node(i, prevNode);
    prevNode.next = newNode;
    prevNode = newNode;
    if (i === k) curNode = newNode; // 연결상태를 세팅하면서 현재 Node를 찾는다.
  }

  let history = []; // Node를 저장해둘 배열
  for (let i = 0; i < cmd.length; i++) {
    const [c, x] = cmd[i].split(' ')
    let idx = 0; // 이동을 위한 idx
    switch (c) {
      case 'U':
        while (idx < x && curNode.prev) {
          curNode = curNode.prev;
          idx++;
        }
        break;
      case 'D':
        while (idx < x && curNode.next) {
          curNode = curNode.next;
          idx++;
        }
        break;
      case 'C':
        history.push(curNode);
        const prev = curNode.prev;
        const next = curNode.next;
        if (prev && next) {
          prev.next = next;
          next.prev = prev;
          curNode = next;
        }
        else if (prev) {
          prev.next = null;
          curNode = prev;
        }
        else if (next) {
          next.prev = null;
          curNode = next;
        }
        break;
      case 'Z':
        // 1. pop해서 prev와 next set
        const node = history.pop();
        const prevNode = node.prev;
        const nextNode = node.next;
        if (prevNode) {
          prevNode.next = node;
        } if (nextNode) {
          nextNode.prev = node;
        }
        break;
    }
  }

  history.forEach(el => {
    answer[el.value] = 'X'
  })
  return answer.join('');
}

const Node = function (idx, prevNode) {
  this.value = idx;
  this.prev = prevNode;
  this.next;
}
const n = 8;
const k = 2;
const cmd = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"]
console.log(solution(n, k, cmd));
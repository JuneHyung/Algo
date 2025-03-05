/**
 * 28278 스택2
 * 정수를 저장하는 스택을 구현한 다음 주어지는 명령을 처리하는 프로그램 작성
 * 
 * 1. X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
 * 2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
 * 3: 스택에 들어있는 정수의 개수를 출력한다.
 * 4: 스택이 비어있으면 1, 아니면 0을 출력한다.
 * 5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.
 * 
 * 첫줄 : N은 1~100만
 * 둘줄 : 명령이 주어진다
 * 명령은 1개이상 주어짐.
 * 
 * 명령이 주어질때마다 명령의 결과를 한 줄에 하나씩 출력
 */
/**
 * 1. 배열로 1~5를 구현.
 * 2. n만큼 반복하면서 order 수행
 */
/**
 * 시간초과
 * 1. 배열 -> LinkedList로 수정
 */
/**
 * 시간초과
 * GPT : console.log()를 모아서 한번에 하도록 수정 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '9',
'4',
'1 3',
'1 5',
'3',
'2',
'5',
'2',
'2',
'5',
]


const N = Number(input[0]);
const orderList = input.slice(1);
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null; // 가장 최근에 추가된 노드 (스택의 최상단)
    this.size = 0; // 스택 크기
  }

  push(num) {
    const newNode = new Node(num, this.top);
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (!this.top) return -1;
    const value = this.top.value;
    this.top = this.top.next;
    this.size--;
    return value;
  }

  length() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0 ? 1 : 0;
  }

  lastItem() {
    return this.top ? this.top.value : -1;
  }
}

const solution = (n, orderList) => {
  const stack = new Stack();
  const result = []; // 출력값 저장용 배열

  for (let i = 0; i < n; i++) {
    const [o, num] = orderList[i].split(' ').map(Number);
    switch (o) {
      case 1:
        stack.push(num);
        break;
      case 2:
        result.push(stack.pop());
        break;
      case 3:
        result.push(stack.length());
        break;
      case 4:
        result.push(stack.isEmpty());
        break;
      case 5:
        result.push(stack.lastItem());
        break;
    }
  }

  console.log(result.join('\n')); // 최종적으로 한 번만 출력
};


solution(N, orderList);
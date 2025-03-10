/**
 * 24511 queuestack
 * 1,2,...N번의 자료구조 (queue or stack)가 나열되어있으며, 각 자료구조에는 한 개의 원소가 들어있다.
 *
 * x_0을 입력받는다.
 *
 * x_0을
 * 1번 자료구조에 삽입한 뒤
 * 1번 자료구조에서 원소를 pop한다. 그때 pop된 원소를
 * x_1이라 한다.
 *
 * x_1을
 * 2번 자료구조에 삽입한 뒤
 * 2번 자료구조에서 원소를 pop한다. 그때 pop된 원소를
 * x_2이라 한다.
 * ...
 *
 * x_{N-1}을
 * N번 자료구조에 삽입한 뒤
 * N번 자료구조에서 원소를 pop한다. 그때 pop된 원소를
 * x_N이라 한다.
 *
 * x_N을 리턴한다.
 *
 * 길이 M의 수열 C를 가져와 수열의 원소를 앞에서 부터 차례대로 queuestack에 삽입할 것이다.
 * 원소들이 주어졌 을떄 해당 원소를 넣은 리턴값 출력.
 *
 *
 * 첫줄 queuestack 자료구조 개수 N
 * 둘줄에 N의 수열 A, i번 자료구조가 큐면 0 스택이면 1
 * 셋줄에 i번 자료구조에 있는 원소다.
 * 넷줄에 삽입할 수열길이 M
 * 다섯줄에 삽입할 원소를 담은 길이 M의 수열C가 주어진다.
 *
 * C의 원소를 차례대로 queuestack에 삽입했을 떄 리턴값을 공백으로 출력
 */
/**
 * 반복하면서 자료구조가 0이면 push shift / 1이면 push pop
 * push-pop이면 그냥 넘어감.
 * 1. 큐 인것만 모으기.
 * 2. m반복하면서 c를 넣고, 각 자료구조에있는 항목 밀어내며 마지막 값을 result에 push
 */
/**
 * 메모리초과 - 1024MB
 * 배열 복사하는 과정에서 발생한 것으로 추측.
 * queueList = [num, ...queueList.slice(0, queueList.length)];
 *
 * 복사하지않고 reverse시켜 push shift로 변경
 *
 */
/**
 * 시간초과
 * 자료구조 구현하는 것으로 수정 - 정답
 */
/**
 * 근데 큐인거만 넣고, C를 붙여넣어서 slice해도 나오지 않나,,?
 */

// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = ['4', '0 1 1 0', '1 2 3 4', '3', '2 4 7'];
// const input = [
//   '5',
//   '1 1 1 1 1',
//   '1 2 3 4 5',
//   '3',
//   '1 3 5',
// ]
const N = Number(input[0]);
const info = input[1].split(' ').map(Number);
const initArr = input[2].split(' ').map(Number);
const M = Number(input[3]);
const C = input[4].split(' ').map(Number);

// class Node {
//   constructor(X) {
//     this.value = X;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   unshift(value) {
//     const node = new Node(value);
//     if (!this.head) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       node.next = this.head;
//       this.head.prev = node;
//       this.head = node;
//     }
//   }

//   push(value) {
//     const node = new Node(value);
//     if (!this.tail) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       node.prev = this.tail;
//       this.tail.next = node;
//       this.tail = node;
//     }
//   }

//   shift() {
//     if (!this.head) return null;
//     const value = this.head.value;
//     this.head = this.head.next;
//     if (this.head) this.head.prev = null;
//     else this.tail = null; 
//     return value;
//   }
// }

// const solution = (n, info, initArr, m, c) => {
//   let queue = new Queue();
//   const result = [];

//   // 큐인 것만 넣기
//   for (let i = 0; i < n; i++) {
//     if (info[i] === 0) queue.unshift(initArr[i]);
//   }

//   // C의 요소를 넣고, pop()된 값 저장
//   for (let i = 0; i < m; i++) {
//     queue.push(c[i]);
//     result.push(queue.shift());
//   }

//   return result.join(' ');
// };

// console.log(solution(N, info, initArr, M, C));

const solution = (n, info, initArr, m, c) => {
  const queue = [];
  // 큐인 것만 넣기
  for (let i = 0; i < n; i++) {
    if (info[i] === 0) queue.push(initArr[i]);
  }

  const result = [...queue.reverse(), ...c].slice(0,m);

  
  return result.join(' ');
};

console.log(solution(N, info, initArr, M, C));

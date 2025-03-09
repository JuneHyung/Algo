/**
 * 11866 요세푸스 문제0
 * 1~N까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(<=N)가 주어진다.
 * 순서대로 K번째 사람을 제거.
 * N명의 사람이 모두 제거될때까지 계속.
 * 
 * N과 K가 주어지면 요세푸스 순열을 구하는 프로그램 작성
 * 
 * 1 <= K <= N <= 1000
 */
/**
 * 1. 직접구현
 * 2. push, shift
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '7 3';
const [N, K] = input.split(' ').map(Number);

class Node {
  constructor(v) {
    this.value = v;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(v) {
    const node = new Node(v);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  shift() {
    if (this.length === 0) return undefined;

    const head = this.head;
    if (this.length === 1) { this.head = null; this.tail = null; }
    else {
      this.head = this.head.next;
    }
    this.length--;
    return head.value;
  }
}

const solution = (n, k) => {
  const queue = new Queue();
  const result = [];
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  while (queue.length > 0) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift())
    }
    result.push(queue.shift());
  }

  return `<${result.join(', ')}>`


}

console.log(solution(N, K));
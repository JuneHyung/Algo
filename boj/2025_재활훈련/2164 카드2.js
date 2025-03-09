/**
 * 2164 카드2
 * N장카드가 1~N까지 번호가있다. 1번카드가 젤 위, N번 카드가 젤 아래인 상태로 순서대로 있다.
 * 젤 위의 카드를 바닥에 버린다. 그다음 젤 위의 카드를 제일 아래있는 카드 밑으로 옮긴다.
 * 1234→234→342→42→24→4
 * N이 주어졌을때 가장 마지막에 남는 카드 구하기
 * 
 * N은 1~50만
 * 
 * 첫줄에 남는 카드 번호 출력.
 */
/**
 * 배열을 이용해 해당 동작을 길이가 1될때까지 반복. shift와 push로 하면 시간초과.
 * 링크드리스트로 구현
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '6'
const N = Number(input)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }
  shift() {
    if (this.length === 0) return undefined;

    const removeNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return removeNode.value;
  }
}

const solution = (n) => {
  const numLinkedList = new LinkedList();
  for (let i = 1; i <= n; i++) numLinkedList.push(i);

  while (numLinkedList.length > 1) {
    numLinkedList.shift();
    const first = numLinkedList.shift();
    numLinkedList.push(first);
  }
  const result = numLinkedList.head.value;
  return result;
}

console.log(solution(N));
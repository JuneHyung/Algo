/**
 * 28279 덱2
 * 다음 명령을 처리하는 프로그램 작성
 * 1 X: 정수 X를 덱의 앞에 넣는다. (1 ≤ X ≤ 100,000)
 * 2 X: 정수 X를 덱의 뒤에 넣는다. (1 ≤ X ≤ 100,000)
 * 3: 덱에 정수가 있다면 맨 앞의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
 * 4: 덱에 정수가 있다면 맨 뒤의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
 * 5: 덱에 들어있는 정수의 개수를 출력한다.
 * 6: 덱이 비어있으면 1, 아니면 0을 출력한다.
 * 7: 덱에 정수가 있다면 맨 앞의 정수를 출력한다. 없다면 -1을 대신 출력한다.
 * 8: 덱에 정수가 있다면 맨 뒤의 정수를 출력한다. 없다면 -1을 대신 출력한다.
 * 
 * 첫줄 명령의 수 N
 * 둘줄 N개까지 명령이 하나씩 주어짐.
 * 
 * 요구하는 명령마다 결과를 한 줄에 하나씩 출력
 */
/**
 * node의 상태 : prev, next, value
 * deck : head, tail, length
 * 1. unshift(X)
 * 1-1. 길이가 0이면 head와 tail을 node(X)로 설정
 * 1-2. 길이가 0이아니면, node의 next는 현재 가장앞에있는 head로 설정.
 * 1-3. 현재 head의 prev를 node로 설정
 * 1-4. head를 node로 변경
 * 1-5. 길이 증가
 * 
 * 2. push(X)
 * 2-1. 길이가 0이면 head와 tail을 node로 설정
 * 2-2. 길이가 0이아니면 node의 prev는 현재 가장뒤에있는 tail로 설정
 * 2-3. 현재 tail의 next를 node로 설정
 * 2-4. tail을 node로 변경
 * 2-5. 길이 증가
 * 
 * 3.shift
 * 3-1. 길이가 0이면 -1 리턴
 * 3-2. head를 현재 head의 next로 변경
 * 3-3. head가 null이 아니면, head의  prev는 null로 변경
 * 3-4. 길이 감소
 * 3-5. 길이가 0이 되면, tail도 null로 변경
 * 3-6. 이전에 가장 앞에 있던 head의 value 리턴
 * 
 * 4. pop
 * 4-1. 길이가 0이면 -1 리턴
 * 4-2. tail을 현재 tail의 prev로 변경
 * 4-3. tail이 null이 아니면, tail의 next를 null로 변경
 * 4-4. 길이 감소
 * 4-5. 길이가 0이되면, head도 null로 변경
 * 4-6. 이전에 가장 뒤에 있던 tail의 value 리턴
 * 
 * 5. deck의 길이 출력
 * 
 * 6. isEmpty : 길이가 0이면 1, 아니면 0
 * 
 * 7. getFront : 길이가 0이면 -1, 아니면 head의 value
 * 
 * 8. getLast : 길이가 0이면 -1, 아니면 tail의 value
 */
// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '11',
'6',
'1 3',
'1 8',
'7',
'8',
'3',
'2 5',
'1 2',
'5',
'4',
'4',
]
const N = Number(input[0]);
const orderList = input.slice(1).map(el=>el.split(' ').map(Number));

class Node{
  constructor(X){
    this.value=X;
    this.next = null;
    this.prev = null;
  }
}

class Deck{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  unshift(X){ // 1
    const node = new Node(X);
    if(this.length===0){
      this.tail = node;
    }else{
      node.next = this.head;
      this.head.prev = node;
    }
    this.head = node;
    this.length++;
  }
  push(X){ // 2
    const node = new Node(X);
    if(this.length===0){
      this.head = node;
    }else{
      node.prev = this.tail;
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }
  shift(){ // 3
    if(this.length===0) return -1;
    const curHead = this.head;
    this.head = this.head.next;

    if (this.head) this.head.prev = null; // 새로운 head의 prev를 null로 설정
    this.length--;

    if (this.length === 0) this.tail = null; // 비었을 경우 tail도 null로 설정
    return curHead.value;
  }
  pop(){ // 4
    if(this.length===0) return -1;
    const curTail = this.tail;
    this.tail = this.tail.prev;

    if (this.tail) this.tail.next = null; // 새로운 tail의 next를 null로 설정
    this.length--;

    if (this.length === 0) this.head = null; // 비었을 경우 head도 null로 설정
    return curTail.value;
  }
  isEmpty(){ return this.length===0 ? 1 : 0}
  getFront(){ return this.length===0 ? -1 : this.head.value}
  getLast(){ return this.length===0 ? -1 : this.tail.value}
}

const solution = (n, orderList) => {
  const result = [];
  const deck = new Deck();
  for(const order of orderList){
    const [o, x] = order;
    switch(o){
      case 1:
        deck.unshift(x);
        break;
      case 2:
        deck.push(x);
        break;
      case 3:
        result.push(deck.shift())
        break;
      case 4:
        result.push(deck.pop())
        break;
      case 5:
        result.push(deck.length)
        break;
      case 6:
        result.push(deck.isEmpty())
        break;
      case 7:
        result.push(deck.getFront())
        break;
      case 8:
        result.push(deck.getLast())
        break;
    }
  }

  return result.join('\n')
}

console.log(solution(N, orderList))
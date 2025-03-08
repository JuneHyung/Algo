/**
 * 18258 큐2
 * 
 * push X: 정수 X를 큐에 넣는 연산이다.
 * pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 * size: 큐에 들어있는 정수의 개수를 출력한다.
 * empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
 * front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 * back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 */
/**
 * 배열을 이용해서 구현 → 시간초과
 * rsult는 모아서 한번에
 */
/**
 * 직접 구현.
 * node - value, next
 * 
 * 1. push(X) : 
 * 1-1. 값이 X인 node 생성
 * 1-2. head가 null이면 head = node, head의 next= tail
 * 1-3. head가 있으면 tail.next = node
 * 1-4. tail = node, 
 * 
 * 2. pop
 * 2-1. size가 2이상이면,
 * 2-1-1. value = 현재 head의 value
 * 2-1-2. nextHead = 현재 head.next
 * 2-1-3. head = nextHead
 * 2-1-4. size-1
 * 2-1-5. return value
 * 
 * 2-2. size가 2면
 * 2-2-1. value = 현재 head의 value
 * 2-2-2. nextHead = 현재 head.next
 * 2-2-3. head = nextHead
 * 2-2-4. 1개가 남으니 tail = nextHead
 * 2-2-5. size-1
 * 2-2-6. return value
 * 
 * 2-3. size가 1이면
 * 2-3-1. value = 현재 head의 value
 * 2-3-2. head = null
 * 2-3-3. tail = null
 * 2-3-4. size-1
 * 2-3-5. return value
 * 
 * 2-4. 이외 return -1
 * 
 * 3. empty : size가 0이면 1 아니면 0
 * 
 * 4. front : head가 있으면 head.value 아니면 -1
 * 
 * 5. back : tail 있으면 tail.value 아니면 -1
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '15',
'push 1',
'push 2',
'front',
'back',
'size',
'empty',
'pop',
'pop',
'pop',
'size',
'empty',
'pop',
'push 3',
'empty',
'front',
]
const N = Number(input[0]);
const ORDER_LIST = input.slice(1).map(el=>el.split(' '));

class Node {
  constructor(value){
    this.value=value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(X){
    const node = new Node(X);
    if(this.head===null){
      this.head = node;
      this.head.next = this.tail;
    }else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }
  pop(){
    if(this.size>2){
      const value = this.head.value;
      const nextHead = this.head.next;
      this.head = nextHead;
      this.size--;
      return value;
    }else if(this.size===2){
      const value = this.head.value;
      const nextHead = this.head.next;
      this.head = nextHead;
      this.tail = nextHead;
      this.size--;
      return value;
    }else if(this.size===1){
      const value = this.head.value;

      this.head = null;
      this.tail = null;
      this.size--;
      return value;
    }else return -1;
  }
  empty(){return this.size===0 ? 1 : 0}
  front(){return this.head!==null ? this.head.value : -1}
  back(){return this.tail!==null ? this.tail.value : -1}
}

const solution = (n, orderList) => {
  const result = [];
  const queue = new Queue();

  for(let i =0;i<n;i++){
    const [o, num] = orderList[i];

    switch(o){
      case 'push':
        queue.push(Number(num))
        break;
      case 'pop':
        result.push(queue.pop())
        break;
      case 'size':
        result.push(queue.size)
        break;
      case 'empty':
        result.push(queue.empty())
        break;
      case 'front':
        result.push(queue.front())
        break;
      case 'back':
        result.push(queue.back())
        break;
    }
  }

  return result.join('\n')

}

console.log(solution(N, ORDER_LIST))
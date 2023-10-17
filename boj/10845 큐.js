/**
 * 10845 큐
 * 큐를 구현하여 다음 명령을 처리하는 프로그램 작성
 * push X: 정수 X를 큐에 넣는 연산이다.
 * pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 * size: 큐에 들어있는 정수의 개수를 출력한다.
 * empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
 * front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 * back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
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
const N = Number(input.shift())

class Queue {
  constructor(){
    this.storage = new Map();
    this.length = 0;
    this.st = 0;
    this.ed = 0;
  }
  size(){
    return this.length;
  }
  empty(){return this.length===0 ? 1 : 0 }
  push(x){
    this.storage.set(this.ed, x);
    this.ed++;
    this.length++;
  }
  pop(){
    if(this.length===0) return -1;
    else{
      const first = this.storage.get(this.st);
      this.storage.delete(this.st);
      this.st++;
      this.length--;
      return first;
    }
  }
  front(){
    return this.length===0 ? -1 :this.storage.get(this.st)
  }
  back(){
    return this.length===0 ? -1 :this.storage.get(this.ed-1)
  }
}
const q = new Queue();
// console.log(q)
const answer = [];
for(let t = 0; t<N; t++){
  const [command, val] = input[t].split(' ');
  switch(command){
    case 'push':
      q.push(val);
      break;
    case 'pop':
      // console.log(q.pop())
      answer.push(q.pop())
      break;
      case 'front':
      // console.log(q.front());
      answer.push(q.front())
      break;
    case 'back':
      // console.log(q.back());
      answer.push(q.back())
      break;
    case 'size':
      // console.log(q.size());
      answer.push(q.size())
      break;
    case 'empty':
      // console.log(q.empty());
      answer.push(q.empty());
      break;
  }
  // console.log(q);
}
console.log(answer.join('\n'))
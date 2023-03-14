/**
 * 10866 덱
 * 정수를 저장하는 덱(Deque)를 구현한 다음 입력으로 주어지는 명령을 처리하는 프로그램 작성.
 * 명령은 총 8가지
 * push_front X: 정수 X를 덱 앞에 넣음
 * push_back X: 정수 X를 덱 뒤에 넣음
 * pop_front X:덱의 가장 앞의 수를 빼고, 그 수를 출력. 없으면 -1
 * pop_back X: 덱의 가장 뒤의 수를 빼고, 그 수를 출력. 없으면 -1
 * size: 덱에 잇는 정수의 개수를 출력
 * empty: 비어있으면 1 아니면 0을 출력
 * front: 덱의 가장 앞에 있는 정수를 출력. 덱에 정수가 없는 경우 -1 출력
 * back: 덱의 가장 뒤에 있는 정수를 출력. 덱에 정수가 없는 경우 -1 출력
 * 
 */

// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '15',
'push_back 1',
'push_front 2',
'front',
'back',
'size',
'empty',
'pop_front',
'pop_back',
'pop_front',
'size',
'empty',
'pop_back',
'push_front 3',
'empty',
'front',
]
const N =Number(input.shift())
const ARR = input.map(el=>el.split(' '))
class Dequeue{
//   * 명령은 총 8가지
//  * push_front X: 정수 X를 덱 앞에 넣음
//  * push_back X: 정수 X를 덱 뒤에 넣음
//  * pop_front X:덱의 가장 앞의 수를 빼고, 그 수를 출력. 없으면 -1
//  * pop_back X: 덱의 가장 뒤의 수를 빼고, 그 수를 출력. 없으면 -1
//  * size: 덱에 잇는 정수의 개수를 출력
//  * empty: 비어있으면 1 아니면 0을 출력
//  * front: 덱의 가장 앞에 있는 정수를 출력. 덱에 정수가 없는 경우 -1 출력
//  * back: 덱의 가장 뒤에 있는 정수를 출력. 덱에 정수가 없는 경우 -1 출력
  constructor(){
    this.queue = [];
  }
  pushFront(value){
    this.queue.unshift(value)
  }
  pushBack(value){
    this.queue.push(value)
  }
  popFront(){
    return this.size()<1 ? -1 : this.queue.shift()
  }
  popBack(){
    return this.size()<1 ? -1 : this.queue.pop()
  }
  size(){
    return this.queue.length
  }
  empty(){
    return this.size()===0 ? 1 : 0
  }
  front(){
    return this.size()===0 ? -1 : this.queue[0]
  }
  back(){
      return this.size()===0 ? -1 : this.queue[this.size()-1]
  }

}
const solution = (n, arr) => {
  const dequeue = new Dequeue();
  const answer = [];
  for(let i=0;i<arr.length;i++){
    const command = arr[i]
    switch(command[0]){
      case 'push_front':
        dequeue.pushFront(Number(command[1]))
      break;
      case 'push_back':
        dequeue.pushBack(Number(command[1]))
      break;
      case 'pop_front':
        answer.push(dequeue.popFront());
      break;
      case 'pop_back':
        answer.push(dequeue.popBack());
      break;
      case 'size':
        answer.push(dequeue.size());
        break;
        case 'empty':
        answer.push(dequeue.empty());
      break;
      case 'front':
        answer.push(dequeue.front());
      break;
      case 'back':
        answer.push(dequeue.back());
      break;
    }
  }
  return answer.join('\n')
}

console.log(solution(N, ARR))
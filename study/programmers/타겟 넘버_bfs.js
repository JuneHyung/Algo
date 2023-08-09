/**
 * 타겟 넘버
 * N개 음이 아닌 정수들이 있다.
 * 순서를 바꾸지 않고 더하거나 빼서 타겟넘버를 만들려한다.
 * 
 * 주어지는 숫자 개수는 2~20개
 * 각 숫자는 1~50 자연수
 * 타겟넘버는 1~1000 자연수
 * 
 * 타겟넘버를 만들 수 있는 방법의 수를 구하기
 * 
 * dfs와 동일 풀이. => 테케 1, 2 시간초과.
 */

class Queue {
  constructor(){
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  length(){ return this.storage[this.rear]===undefined ? 0 : this.rear - this.front + 1}
  push(value){
    if(this.length()===0) this.storage['0'] = value;
    else{
      this.rear+=1;
      this.storage[this.rear] = value;
    }
  }
  shift(){
    const result = this.storage[this.front];
    delete this.storage[this.front];
    if(this.front===this.rear){ // storage 값이 1개일 때
      this.front = 0;
      this.rear = 0;
    }else{
      this.front += 1;
    }
    return result;
  }
}

const solution = (numbers, target) => {
  let answer = 0;
  const lastIdx = numbers.length-1;
  const first = numbers[0];
  
  const q = new Queue();
  q.push([first, 0])
  q.push([-1*first, 0])

  while(q.length()!==0){
    const [sum, idx] = q.shift();
    const nIdx = idx+1;

    if(idx===lastIdx){
      if(sum===target) answer++;
    }else{
      q.push([sum+numbers[nIdx], nIdx])
      q.push([sum-numbers[nIdx], nIdx])
    }
  }

  return answer;
}

const numbers = [1, 1, 1, 1, 1]
const target = 3;
console.log(solution(numbers, target))
const array = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const stack = [];
const result = [];

const len = array.shift();

for (let i = 0; i < len; i++) {        
    switch(array[i]) {
        case 'pop': 
          result.push(stack.pop() || -1);
          break;

        case 'size': 
          result.push(stack.length);
          break;

        case 'empty': 
          result.push(stack[0] ? 0 : 1);
          break;

        case 'top': 
          result.push(stack[stack.length - 1] || -1);
          break;

        default: 
          stack.push(array[i].split(" ")[1]);
          break;
    }
}

console.log(result.join('\n'));

/**
 * 10828 스택
 * 정수를 저장하는 스택을 구현
 * push X: 정수 X를 스택에 넣는 연산이다.
 * pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 * size: 스택에 들어있는 정수의 개수를 출력한다.
 * empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
 * top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n').trim()
const input = [
  '7',
  'pop',
  'top',
  'push 123',
  'top',
  'pop',
  'top',
  'pop',
]

const T = Number(input.shift())



const solution = (tc, commands) => { 
  console.log(commands)
  const answer = [];
  class Stack { 
    constructor() { 
      this.storage = new Map();
      this.topIdx = 0;
    }
    push(value) { 
      this.storage.set(this.topIdx, value);
      this.topIdx++;
    }
    pop() { 
      if (this.size() === 0) return -1;
      else { 
        const topItem = this.storage.get(this.topIdx - 1)
        this.storage.delete(this.topIdx-1);
        this.topIdx--;
        return topItem;
      }
    }
    size() { 
      return this.storage.size;
    }
    empty() { 
      return this.size() === 0 ? 1 : 0;
    }
    top() { 
      return this.size() ===0 ? -1 : this.storage.get(this.topIdx-1)
    }
  }
  const stack = new Stack();
  for (let t = 0; t < tc; t++) { 
    const info = commands.shift();
    switch (info) { 
      case 'pop':
        answer.push(stack.pop())
        break;
      case 'size':
        answer.push(stack.size())
        break;
      case 'empty':
        answer.push(stack.empty())
        break;
      case 'top':
        answer.push(stack.top())
        break;
      default:
        const [command, val] = info.split(' ').map(el => el.trim());
        stack.push(Number(val));
        break;
    }
  }
  return answer.join('\n')
}

console.log(solution(T, input));

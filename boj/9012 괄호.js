/**
 * 9012 괄호
 * 주어진 괄호 문자열이 VPS인지 아닌지 판단.
 * VPS 는 Valid PS로 올바른 괄호 문자열이다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const input = [
  '6',
'(())())',
'(((()())()',
'(()())((()))',
'((()()(()))(((())))()',
'()()()()(()()())()',
'(()((())()(',
]
// const input = [
//   '1',
// '(()())((()))',
// ]
const T = Number(input.shift())

const solution = (arr) => { 
  // console.log(arr)
  if (arr[0] === ')') return 'NO';
  const stack = [arr.shift()];
  while (arr.length!==0) { 
    const one = stack.pop();
    const two = arr.shift();
    // console.log(one, two);
    if(one===undefined) stack.push(two)
    else if (one === '(' && two === ')') continue;
    else { 
      stack.push(one)
      stack.push(two)
    }
    // console.log(stack);
  }
  return stack.length===0 ? 'YES' : 'NO'
}

for (let t = 0; t < T; t++) { 
  const ARR = input.shift().split('');
  console.log(solution(ARR))
}
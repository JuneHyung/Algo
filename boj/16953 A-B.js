/**
 * 16953 A->B
 * 
 * 2를 곱한다.
 * 1을 수의 가장 오른쪽에 추가한다.
 * 2가지 연산이 가능하다.
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '2 162'
const [A,B] = input.split(' ').map(Number)

const getLast = (num) =>{
  let str = num.toString().split('')
  return Number(str[str.length-1])
}

const removeLast = (num) => {
  let str = num.toString().split('');
  str.pop();
  return Number(str.join(''));
}

const solution = (a, b) => {
  let answer = 0;
  while(a!==b){
    if(a>b) return -1;
    else if(getLast(b)===1) {
      b= removeLast(b);
      answer+=1;
    } else if(getLast(b)!==1){
      b /= 2;
      answer+=1;
    }
  }

  return answer+1;
}

console.log(solution(A,B))

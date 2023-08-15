/**
 * 1747 소수&펠린드롬
 * 수와 그 수의 순서를 뒤집은 수가 일치하는 수를 팰린드롬이라한다.
 * N보다 크거나 같고 소수면서 팰린드롬인 수 중 가장 작은수 구하기.
 * N은 100만
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '31'
let N = Number(input);

const solution = (n) => {
  const isPrime = (num) => {
    if(num===1) return false;
    else if(num===2) return true;
    else {
      for(let i=2; i<=Math.floor(Math.sqrt(num)); i++){
        if(num%i===0) return false;
      }
      return true;
    }
  }
  
  
  while(true){
    let str = n.toString();
    const reverse = str.split('').reverse().join('');
    if(reverse===n.toString() && isPrime(n)){

      return n;
    }
    n++;
  }
  
}
console.log(solution(N))
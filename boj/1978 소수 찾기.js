/**
 * 1978 소수 찾기
 * N개 숫자 중 소수가 몇개인지 찾기
 */


// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = [
  '3',
'7 2 3',
]
const isPrime = (n) => {
  if (n == 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}


const [c, nums] = input;

console.log(nums.split(" ").filter(v => isPrime(v)).length);
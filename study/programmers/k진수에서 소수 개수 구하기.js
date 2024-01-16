/**
 * k진수에서 소수 개수 구하기
 * n을 k진수 바꿧을 때, 변환된 수 안에 아래 조건이 맞는 소수가 몇갠지 확인.
 * 0P0 : 소수 양쪽에 0이있는 경우
 * P0처럼 소수 오른쪽에만 0이있고, 왼쪽엔 아무것도 없는 경우
 * 0P : 소수 왼쪽에만 0이있고, 오른쪽엔 아무것도 없는 경우
 * P처럼 소수 양쪽에 아무것도 없는 경우.
 * P는 자릿수에 0을 포함하지 않은 수.
 * 
 * 1. max까지 isPrime객체 만들고 소수판단 -> 11번 실패
 */
const isPrime = (num) => {
  for(let i=2;i<=Math.sqrt(num); i++){
    if(num%i===0) return false;
  }
  return true;
}

const solution = (n, k) => {
  const str = n.toString(k);  
  let answer = 0;
  const arr = str.split('0').filter(el=>el.length>0 && el!=='0' && el!=='1').map(Number)
  

  for(const num of arr) {
    answer += isPrime(num) ? 1 : 0
  }
  return answer;
}

const n = 437674 // 100000;
const k = 3; // 3~10
// const n = 110011 // 100000;
// const k = 10; // 3~10
// const n = 10000 // 100000;
// const k = 10; // 3~10
console.log(solution(n, k))
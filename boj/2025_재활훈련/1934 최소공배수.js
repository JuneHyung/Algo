/**
 * 1934 최소공배수
 * 수학, 정수론, 유클리드호제법
 * 
 * A와 B에 대해 A의 배수이면서 B의 배수인 자연수를 A와 B의 공배수라한다.
 * 이중가장작은 수가 최소공배수다.
 * A와 B가 주어졌을 떄 최소공배수 구하기
 * 
 * 첫줄 테케수T 1~1000
 * 둘줄 A와 B 1~45000
 * 
 * A와 B의 최소공배수를 입력받은 순서대로 한줄에 하나씩 출력
 */
/**
 * 풀이 순서
 * 1. t만큼 반복해 a와 b를 받아 최소공배수를 구하는 solution 함수 작성
 * 2. 최소공배수(LCM) = 자연수곱 / 최대공약수
 * 3. 최대공약수(GCD) = 유클리드호제법 이용.
 * 4. LCM 도출.
 */
/**
 * 유클리드 호제법
 * 두 양의 정수 또는 두 다항식의 최대공약수(GCD)를 구하는 방법
 * 
 * 2개 자연수 a,b에 대해서 a를 b로나눈 나머지를 r이라하면,
 * a와 b의 최대공약수 = b와 r의 최대공약수와 같다.
 * 
 * a가 24 b가 18
 * 1) GCD(24, 18), a=24, b=18, r=6
 * 2) GCD(18, 6), a=18, b=6, r=0
 * 최대 공약수(GCD)는 6
 * 
 * 최소 공배수 = 두 자연수곱 / 최대공약수
 * 24 * 18 / 6 = 72
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
  '1 45000',
  '6 10',
  '13 17',
]
const T = Number(input[0]);

const solution = (a, b) => {
  const getGCD = (a, b) => {
    const r = a % b;
    return r === 0 ? b : getGCD(b, r)
  }
  const GCD = getGCD(a, b); // 2
  const LCM = a * b / GCD; // 3
  return LCM; // r
}

// 1.
for (let t = 1; t <= T; t++) {
  const [a, b] = input[t].split(' ').map(Number)
  console.log(solution(a, b))
}

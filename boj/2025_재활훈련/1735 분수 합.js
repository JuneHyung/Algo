/**
 * 1735 분수 합
 * 분류 : 수학, 정수론, 유클리드 호제법
 * A/B는 분자가 A 분모가 B인 분수이며, A와 B는 모두 자연수
 * 두 분수합 또한 분수로 표현할 수 있다.
 * 그 합을 기약 분수 형태로 구하는 프로그램.
 * 기약분수는 더 이상 약분되지 않는 분수
 * 
 * 첫줄과 둘줄에 각 분수의 분자와 분모를 뜨하는 2개의 자연수가 순서대로 주어진다.
 * 입력되는 자연수들은 모두 3만이하.
 * 
 * 첫 줄에 구하고자 하는 분자와 분모를 뜻하는 2개자연수를 공백으로 구분해 출력
 */

/**
 * 1. 첫 분수, 둘 분수를 받아 정답 도출하는 solution 작성
 * 2. 분모의 최소공배수(GCD)를 구하기
 * 3. 최소공배수 / 첫 분모를 첫 분자에 곱하기.
 * 4. 최소공배수 / 둘 분모를 둘 분자에 곱하기.
 * 5. 곱한 첫 분자 + 둘 분자 더하기.
 * 6. 답도출 
 */
/**
 * 반례 
 * 2 4
 * 1 3
 * 정답 : 5 6
 * 출력 : 2 3
 * 기약분수의 결과를 리턴.
 * 
 * 첫 풀이 5번에 이어서.
 * 6. lastC = 곱한 첫분자 + 둘분자, LCM의 GCD 구하기.
 * 7. lastC / lastGCD | LCM / lastGCD 결과로 리턴
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const input = [
  '2 7',
  '3 5',
]
const [fC, fP] = input[0].split(' ').map(Number)
const [sC, sP] = input[1].split(' ').map(Number)

const solution = (fC, fP, sC, sP) => {
  const getGCD = (a, b) => {
    const r = a % b;
    return r === 0 ? b : getGCD(b, r);
  }
  const GCD = getGCD(fP, sP);
  const LCM = fP * sP / GCD;

  const rfC = (LCM / fP) * fC;
  const rsC = (LCM / sP) * sC;

  const lastC = rfC + rsC;
  const lastGCD = getGCD(lastC, LCM);

  const result = `${lastC / lastGCD} ${LCM / lastGCD}`
  return result
}

console.log(solution(fC, fP, sC, sP))
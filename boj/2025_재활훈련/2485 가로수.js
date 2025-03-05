/**
 * 2485 가로수
 * 직선으로된 도로 한 편ㅇ ㅔ가로수가 임의의 간격으로 심어짐.
 * 모두 같은 간격이 되도록 가로수를 추가로 심는 사업을 추진하고있다.
 * 1, 3, 7, 13위치에 잇다면, 5, 9, 11에 더 심으면 모든 가로수들의 간격이 같게된다.
 * 심긴 가로수 위치가 주어졌을 때 모든 가로수가 같은 간격이 되도록 새로 심어야 하는 가로수의 최소수를 구하는 프로그램 작성.
 * 추가된 나무는 기존의 나무들 사이에만 심을 수 있다.
 * 
 * 첫줄 이미 신긴 가로수 수 N(3~10만)
 * 둘줄부터 N개줄에 심긴 위치 위치는 10억(10^9)
 * 위치는 모두 다르며, N개 가로수는 기준점으로부터 가까운 순서대로 주어짐.
 * 
 * 새로 심어야 하는 가로수의 최소수를 구하기
 */

/**
 * 풀이 순서
 * 1. 위치를 입력받아 답을 도출하는 solution 작성
 * 2. 각 간격들에 대한 배열 구하기.
 * 3. 배열의 가장 작은수와 가장 큰수의 최대 공약수 구하기.
 * 4. 각 간격들 수 / 최대 공약수 -1 카운팅
 * 5. 합쳐서 결과 리턴
 */
/**
 * '5',
 * '1',
 * '4',  → gap: 3
 * '11', → gap: 7
 * '19', → gap: 8
 * '28', → gap: 9
 * 3과 9의 GCD를 구하기 때문에 반례 발생.
 * 3번의 가장 작은수와 큰수만 구하는 것이아니라 전체의 GCD를 구하도록 변경.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5',
  '1',
  '4',
  '11',
  '19',
  '28',
]
const N = Number(input[0]);
const infoList = input.slice(1).map(Number);

const solution = (n, infoList) => {
  const gapList = [];
  for (let i = 0; i < n - 1; i++) gapList[i] = infoList[i + 1] - infoList[i]
  gapList.sort((a, b) => a - b);

  const getGCD = (a, b) => {
    const r = a % b;
    return r === 0 ? b : getGCD(b, r);
  }

  // 전체의 GCD 구하기
  const GCD = gapList.reduce((a, c) => getGCD(a, c));

  const result = gapList.map(el => el / GCD - 1).reduce((a, c) => a + c, 0);
  return result;

}

console.log(solution(N, infoList));

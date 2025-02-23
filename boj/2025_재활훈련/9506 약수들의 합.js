/**
 * 9506 약수들의 합
 * n이 자신을 제외한 모든 약수들의 합과 같으면 완전수라한다.
 * ex) 6
 * n이 완전수인지 아닌지 판단해주는 프로그램작성
 * 
 * n은 2~10만
 * 테케가 주어질텐데 마지막은 -1.
 * 
 * n이 완전수이면 약수들의 합으로 표현 6 = 1 + 2 + 3
 * n이 완전수가 아니면 n is NOT perfect.를 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dve/stdin').toString().trim().split('\n');
const input = [
  '6',
  '12',
  '28',
  '-1',
]
const solution = (n) => {
  const sqrt = Math.sqrt(n);
  const divisorSet = new Set();

  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      divisorSet.add(i);
      divisorSet.add(n / i);
    }
  }

  const divisorList = [...divisorSet];
  const sortedDivisorList = divisorList.sort((a, b) => a - b);
  const slicedDivisorList = sortedDivisorList.slice(0, sortedDivisorList.length - 1);
  const sum = slicedDivisorList.reduce((a, c) => a + c, 0);
  const result = sum === n ? `${sum} = ${slicedDivisorList.join(' + ')}` : `${n} is NOT perfect.`;

  return result;
}

while (true) {
  const N = Number(input.shift());
  if (N === -1) break;
  console.log(solution(N));
}

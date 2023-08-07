/**
 * 2960 에라토스테네스의 체
 * 에라토스테네스의 체는 N보다 작거나 같은 모두 소수를 찾는 알고리즘이다.
 *
 * 1. 2부터 N까지 모든 정수를 적는다.
 * 2. 아직 지우지 않은 수 중 가장 작은 수를 찾는다. 이것을 P라고 하고, 이 수는 소수이다.
 * 3. P를 지우고, 아직 지우지 않은 P의 배수를 크기 순서대로 지운다.
 * 4. 아직 모든 수를 지우지 않았다면, 다시 2번 단계로 간다.
 *
 * N, K가 주어졌을 때 K번째 지우는 수를 구하는 프로그램 작성.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = "15 12";
const [N, K] = input.split(" ").map(Number);
const solution = (n, k) => {
  const numbers = Array.from({ length: n + 1 }, () => 0);
  for (let i = 2; i <= n; i++) numbers[i] = i;

  const answer = [];
  for (let i = 2; i <= n; i++) {
    if (numbers[i] === 0) continue;
    else {
      numbers[i] = 0;
      answer.push(i);
      for (let j = i ** 2; j <= n; j += i) {
        if(numbers[j]===0) continue;
        numbers[j] = 0;
        answer.push(j);
      }
    }
  }
  console.log(answer)
  return answer[k - 1];
};

console.log(solution(N, K));

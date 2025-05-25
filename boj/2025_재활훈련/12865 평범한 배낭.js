/**
 * 12865 평범한 배낭
 * 여행에 필요한 물건 N개. 무게 W와 가치V를 가진다.
 * K만큼 무게만 넣을 수 있는 배낭이 있다.
 * 최대한 큰 가치를 가지게 해주자.
 *
 * N은 1~100 / K는 1~100,000 / W는 1~100,000 / V는 1~1,000
 * 첫줄 N, K
 * 둘줄부터 W와 V가 주어진다.
 *
 */
/**
 * 조합은 안될듯 하다. backpack문제니까.
 *
 * i개 물건을 담았을 때, 가질 수 있는 가치를 저장. (?) -> 무게는?
 * GPT
 * i개 물건을 담았을 떄 최대무게 j로 얻을 수 있는 최대 가치 => 2차원 배열로 생각
 * v+backpack[i-1][j-w] : 이번 물건을 넣었을 때 가치
 * backpack[i-1][j] : 이번 물건을 넣지 않았을떄의 가치
 *
 * 왜 j-w인가?
 * 목표는 backpack에 i번째(n) 까지 물건들을 담고, 무게가 j를 채울떄(k) 최대가치
 * 즉, backpack[4][7]에서
 * 무게가 4, 가치가 8인 아이템을 넣고싶을 때 '이전 아이템 중 최대 가치'를 어떻게 채웠는지 찾는것.
 */
// const fs=require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = ['4 7', '6 13', '4 8', '3 6', '5 12'];
const [N, K] = input[0].split(' ').map(Number);
const INFO = input.slice(1).map((el) => el.split(' ').map(Number));

const solution = (n, k, info) => {
  const backpack = Array.from({ length: n + 1 }, () => Array.from({ length: k + 1 }, () => 0));

  for (let i = 1; i <= n; i++) {
    const [w, v] = info[i - 1];
    for (let j = 1; j <= k; j++) {
      if (w <= j) {
        backpack[i][j] = Math.max(v + backpack[i - 1][j - w], backpack[i - 1][j]);
      } else {
        backpack[i][j] = backpack[i - 1][j];
      }
    }
  }
  const result = backpack[n][k];
  return result;
};

console.log(solution(N, K, INFO));

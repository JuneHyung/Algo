/**
 * 13904 과제
 * 하루에 한 과제를 끝낼 수 있는데, 과제마다 마감일이 있으므로 모든 과제를 끝내지 못할 수도 있다.
 * 과제마다 끝냈을 때 얻을 수 있는 점수가 있는데, 마감일이 지난 과제는 점수를 받을 수 없다.
 * 웅찬이는 가장 많은 과제를 받을 수 있도록 과제를 수행하고 싶다.
 * 웅찬이가 받을 수 있는 과제의 최대값을 구하자.
 * 첫 줄 N
 * 그 뒤로 과제마갈일 d와 과제점수 w가 주어진다.
 *
 * 점수를 기준으로 내림차순 정렬 후 max값 부터 1씩 감소하며 해당 날짜에 수행가능한 과제를 수행.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['4', '5 100', '2 2', '2 2', '3 2'];
const N = Number(input.shift());
const INFO = input.map((el) => el.split(' ').map(Number));

const solution = (n, info) => {
  info.sort((a, b) => b[1] - a[1]);
  console.log(info);
  const max = Math.max(...info.map((el) => el[0]));
  const visited = Array.from({ length: max + 1 }, () => false);

  let point = 0;
  for (let i = max; i >= 1; i--) {
    for (let j = 0; j < n; j++) {
      const [d, w] = info[j];
      if (!visited[j] && d >= i) {
        point += w;
        visited[j] = true;
        break;
      }
    }
  }
  const answer = point;
  return answer;
};

console.log(solution(N, INFO));

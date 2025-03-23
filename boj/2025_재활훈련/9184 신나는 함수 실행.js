/**
 * 9184 신나는 함수 실행
 * a, b, c가 주어졌을 때 w(a, b, c)를 구하는 프로그램 작성
 * 
 * 입력은 a, b, c 한줄에 하나씩
 * 마지막은 -1 -1 -1로 나타나며 세 정수가 모드 =1인 경우는 마지막 제외 없다.
 */
/**
 * 0. 오래걸리니까 고치란건가?
 * 0. 분류가 다이나믹 프로그래밍인걸 보니 이를 활용하는 것이 정답인듯 하다.
 * 0. 배열에 a, b, c,에 대한 값을 저장하여 리턴하는 방식으로 수정해기.
 * 
 * 1. w함수 작성 → 50 50 50 이 나올생각이 없음
 * 2. arr[a][b][c]가 채워지면 바로 리턴하도록 추가 → 시간초과
 * 3. 배열 생성문 수정, 안의 원소가 0이 아닌 undefined가 들어가고 있었음
 * [
 *  [
 *    [0,0, ...]
 *  ]
 * ]
 * 4. w(20, 20, 20)으로 축서 먼저 하도록 수정
 * 5. Map으로변경
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '1 1 1',
'2 2 2',
'10 4 6',
'50 50 50',
'-1 7 18',
'-1 -1 -1',
]
let idx = 0;

const solution = (a, b, c) => {
  const cache = new Map();

  const w = (a, b, c) => {
    if (a <= 0 || b <= 0 || c <= 0) return 1;
    if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

    const key = `${a},${b},${c}`;
    if (cache.has(key)) return cache.get(key);

    let result;
    if (a < b && b < c) {
      result = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    } else {
      result =
        w(a - 1, b, c) +
        w(a - 1, b - 1, c) +
        w(a - 1, b, c - 1) -
        w(a - 1, b - 1, c - 1);
    }

    cache.set(key, result);
    return result;
  };

  return `w(${a}, ${b}, ${c}) = ${w(a, b, c)}`;
};

while (true) {
  const [a, b, c] = input[idx].split(' ').map(Number);
  if (a === -1 && b === -1 && c === -1) break;

  console.log(solution(a, b, c));
  idx++;
}
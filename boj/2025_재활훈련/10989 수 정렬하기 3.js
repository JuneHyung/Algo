/**
 * 10989 수 정렬하기 3
 * 오름차순 정렬
 * 줄의 개수 N은 1~1천만
 * N은 1만보다 작은 자연수
 * // 메모리초과
 */

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '10',
'5',
'2',
'3',
'1',
'4',
'2',
'3',
'5',
'1',
'7',
]
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const arr = Array.from({ length: 10001 }, () => 0);

// 카운팅 정렬 배열 채우기
for (let i = 1; i <= N; i++) {
  arr[Number(input[i])]++;
}

const output = [];
for (let i = 1; i < 10001; i++) {
  while (arr[i] > 0) {
    output.push(i); // 배열에 숫자 추가
    arr[i]--;
  }
}
process.stdout.write(output.join('\n') + '\n'); // 한 번에 출력
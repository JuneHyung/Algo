/**
 * 1992 쿼드트리
 * 흰점을 나타내는 0과 검은점 1로만 이루어진 영상(2차원배열)에서 같은 숫자의 점들이 한 곳에 많이 몰려있으면,
 * 쿼드트리에서는 이를 압축하여 표현할 수 있다.
 * 
 * 모두 0이면 결과는 0 / 모두 1이면 결과는 1
 * 섞여있으면 왼쪽위 오른쪽위 왼쪽아래 오른쪽아래 나눠서 압축하며, 이 4개의 영역을 압축한 결과를 차례대로 괄호 안에 묶어서 표현
 * 압축한 결과 출력하기
 * 
 * 첫줄 영상크기 N (N은 언제나 2의 제곱 수로 1~64)
 * 둘줄 길이 N의 문자열이 n개 들어온다.
 */
/**
 * 재귀.
 * 시작x, y, n으로 시작해서
 * 1. 정사각형 n*n의 시작값과 모두 같은지 체크.
 * 2. 모두 같으면 해당값 리턴.
 * 3. 아니면, 0과 1이 섞인형태.
 *    n을 반으로 나눈 값으로 재귀. 재귀의 앞뒤로 () 붙이기.
 * 3-0. (
 * 3-1. 좌상 (x, y)
 * 3-2. 우상 (x+halfN, y)
 * 3-3. 좌하 (x, y+halfN)
 * 3-4. 우하 (x+halfN, y+halfN)
 * 3-5. )
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '4',
  '1101',
  '1100',
  '1111',
  '0110',
]
// const input = [
//   '8',
//   '11110000',
//   '11110000',
//   '00011100',
//   '00011100',
//   '11110000',
//   '11110000',
//   '11110011',
//   '11110011',
// ]
const N = Number(input[0])
const VIDEO = input.slice(1).map(el => el.split('').map(Number));

const solution = (n, video) => {
  const quadTree = [];
  const compress = (x, y, size) => {

    if (size === 1) { quadTree.push(video[x][y]); return; }

    const start = video[x][y];
    let isSame = true;

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const next = video[x + i][y + j];
        if (next !== start) {
          isSame = false;
          break;
        }
      }
      if (!isSame) break;
    }

    if (isSame) {
      quadTree.push(start);
    }
    else {
      const half = size / 2;
      quadTree.push('(');
      compress(x, y, half); // 좌상
      compress(x, y + half, half); // 우상
      compress(x + half, y, half); // 좌하
      compress(x + half, y + half, half); // 우하
      quadTree.push(')');
    }
  }
  compress(0, 0, n);

  // console.log(quadTree)

  return quadTree.join('')
}

console.log(solution(N, VIDEO));
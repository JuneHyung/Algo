/**
 * 2987 사과나무
 * 백준이는 사과나무가 n개 심긴 땅의 일부를 구매했다.
 * 구매한 땅은 삼각형.
 * 꼭지점과 사과나무 좌표가 주어졌을 떄 땅의 넓이와 땅에있는 사과나무읙 ㅐ수를 구해라.
 * (xA,yA), (xB,yB), (xC,yC)의 넓이 = |xA(yB-yC)+xB(yC-yA)+xC(yA-yB)| / 2
 * 
 * 꼭지점 좌표가 주어지고,
 * 사과나무 개수 N이 주어진다.
 * 그다음 사과나무 좌표가 주어진다.
 * 
 * 백준의 땅넓이를 소수 첫째자리까지 출력하고, 그 다음줄에 백준의 사과나무 개수를 출력.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '2 6',
'5 1',
'7 8',
'5',
'1 4',
'3 5',
'6 4',
'6 5',
'4 7',
]

const TRIANGLE_INFO = input.slice(0, 3).map(el => el.split(' ').map(Number))
const N = Number(input[3])
const TREE_INFO = input.slice(4).map(el => el.split(' ').map(Number))

const solution = (triangleInfo, n, treeInfo) => {
  triangleInfo.sort((a, b) => a[1] - b[1])
  const getWidthByThreePoint = (ax, ay, bx, by, cx, cy) => {
    return Math.abs((ax * (by - cy)) + (bx * (cy - ay)) + (cx * (ay - by))) / 2
  }
  const [ax, ay] = triangleInfo[0];
  const [bx, by] = triangleInfo[1];
  const [cx, cy] = triangleInfo[2];
  // console.log(ax, ay, bx, by, cx, cy)
  const width = getWidthByThreePoint(ax, ay, bx, by, cx, cy).toFixed(1)

  // 주어진 점으로 삼각형을 만들었을때 그 합이 원래 넓이와 같다면 내부에있는 점.
  let cnt = 0;
  for(const [x, y] of treeInfo){
    const w1 = getWidthByThreePoint(x, y, ax, ay, bx, by)
    const w2 = getWidthByThreePoint(x, y, bx, by, cx, cy)
    const w3 = getWidthByThreePoint(x, y, ax, ay, cx, cy)
    const sum = (w1 + w2 + w3).toFixed(1)
    if(sum===width) cnt++;
  }
  const answer = width + '\n' + cnt
  return answer;
}

console.log(solution(TRIANGLE_INFO, N, TREE_INFO))
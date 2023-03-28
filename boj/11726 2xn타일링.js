/**
 * 11726 2xn 타일링
 * 2xn크기의 직사각형을 1x2, 2x1로 채우는 방법의 수를 구하시오
 */

// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '3'
const N = Number(input)
const solution = (n) =>{
  const tile = [0, 1,2];
  for(let i=3;i<=n;i++) tile[i] = tile[i-1] + tile[i-2]%10007
  return tile[n];
}

console.log(solution(N))

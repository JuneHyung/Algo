/**
 * 1309 동물원
 * 가로2칸 세로 N칸인 우리가 있다.
 * 2xN배열에 사자를 배치하는 경우의 수가 몇가지인지 알아내자.
 * 사자는 가로로도 세로로도 붙어있게 설치 X
 * 한 마리도 배치하지 않는 경우 1개경우의 수로가정.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '4'
const N = Number(input)
const solution = (n) => {

  const cage = [1, 3, 7 ]

  for(let i=3; i<=n; i++){
    cage[i] = (cage[i-1] + (cage[i-1]+cage[i-2]))%9901
  }
  // console.log(cage)
  return cage[n]
}

console.log(solution(N))

/**
 * 0 
 * 1
 * 
 * 
 * 1
 * 00
 * 
 * 10
 * 
 * 01
 * 
 * 2
 * 00
 * 00
 * 
 * 10 01 00 00
 * 00 00 10 01
 * 
 * 10 01
 * 01 10
 * 
 * 
 * 3
 * 00
 * 00
 * 00
 * 
 * 10 01 00 00 00 00
 * 00 00 10 01 00 00
 * 00 00 00 00 10 01
 * 
 * 10 10 10 01 01 01 00 00
 * 01 00 00 10 00 00 10 01
 * 00 10 01 00 10 01 01 10
 * 
 * 10 01
 * 01 10
 * 10 01
 */
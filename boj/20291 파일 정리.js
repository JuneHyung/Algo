/**
 * 20291 파일 정리
 * 파일을 확장자 별로 정리하여 몇 개씩 있는지.
 * 보기 편하게 확장자들을 사전 순으로 정렬
 * 첫 줄 : N
 * 둘 줄 : 파일명
 * 파일 명은 알파벳 소문자와 점으로만 구성됨.
 * .은 한번만 등장하며, 첫글자나 마지막글자에 오지않음.
 * 파일명은 최소 3, 최대 100
 * 
 * 확장자 이름과 파일의 개수를 출력
 * 확장자가 여러개면 사전 순으로 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '8',
'sbrus.txt',
'spc.spc',
'acm.icpc',
'korea.icpc',
'sample.txt',
'hello.world',
'sogang.spc',
'example.txt',
]
const N = Number(input.shift())
const solution = (n, files) => {
  const result = {};
  files = files.map(el => el.split('.'))
  for (let i = 0; i < n; i++) { 
    const [name, extension] = files[i];
    result[extension] = result.hasOwnProperty(extension) ? result[extension]+1 : 1
  }
  const answer = Object.entries(result)
    .sort((a, b) => { 
      if(a[0]>b[0]) return 1
      else if (a[0] < b[0]) return -1
      else return 0
    })
    .map(el => el.join(' '))
    .join('\n')
  return answer;
}
console.log(solution(N,input))
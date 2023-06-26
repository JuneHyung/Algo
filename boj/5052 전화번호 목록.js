/**
 * 5052 전화번호 목록
 * 일관성이 있는지 없는지 구하는 프로그램
 * 한 번호가 다른 번호의 접두어인 경우가 없어야 한다.
 * 
 * 테스트케이스 t
 * 전화번호 수 n
 * 전화번호
 * 전화번호가 같은 경우는 없다.
 * 
 * 일관성이 있으면 YES
 * 아니면 NO
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '2',
  '5',
  '113',
  '12340',
  '123440',
  '12345',
  '98346',
  '3',
  '911',
  '97625999',
  '91125426',
]
// const input = [
//   '1',
//   '3',
//   '1',
//   '2',
//   '11',
// ]
const T = Number(input.shift())
const solution = (n, info) => {
  info.sort();
  let prevLength = 0;
  let flag = false;
  for(let i=0;i<n;i++){
    if(info[i].slice(0, prevLength) === info[i-1]){
      flag=true;
      break;
    }
    prevLength = info[i].length;
  }
  

  return flag ? 'NO' : 'YES'
}

for(let t=0; t<T; t++){
  const N  = Number(input.shift())
  const INFO = input.splice(0, N);
  console.log(solution(N, INFO))
}
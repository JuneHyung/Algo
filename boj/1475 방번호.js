/**
 * 1475 방번호
 * 방번호가 주어지면 필요한 숫자 세트 개수 구하기.
 * 숫자 세트는 한 세트로 판다.
 * 6과 9는 서로 뒤집어 쓸 수 있다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '67890'
const INFO = input.split('').map(Number);
const solution = (info) => {
  const list = new Map();
  for(let i=0;i<=9;i++){
    list.set(i, 0)
  }
  for(const n of info){
    list.set(n, list.get(n)+1);
  }


  if(list.has(9)) {
    list.set(6, list.get(6)+list.get(9));
    list.delete(9)
  }
  list.set(6, Math.ceil(list.get(6)/2))

  const answer = Math.max(...list.values());
  return answer;
}
console.log(solution(INFO))
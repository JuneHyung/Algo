/**
 * 2942 퍼거슨과 사과
 * 빨간사과R, 초록사과G개가지고 있따.
 * 모든 선수에게 같은 개수를 주려고한다.
 * 사과는 남으면 안된다.
 * 4 / 8이면,
 * 1명에게 4 8
 * 2명에게 2 4
 * 4명에게 1 2
 * 퍼거슨이 사과를 나누어 주는 방법을 구하는 프로그램 작성.
 * 사과를 나누어 주는 방법을 구하는 프로그램 작성.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '4 8'
const [R, G] = input.split(' ').map(Number)
const solution = (r, g) =>{
  const answer = []
  const getGCD = (a, b) => b>0 ? getGCD(b, a%b) : a;
  const gcd = getGCD(r,g);
  for(let i=gcd;i>=1;i--){
    if(gcd%i===0){
      answer.push([`${i} ${r/i} ${g/i}`])
    }
  }

  return answer.join('\n')

}
console.log(solution(R, G))
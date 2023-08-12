/**
 * 14881 물통 문제
 * a와 b용량의 물통이 있다.
 * 물을 적절하게 부어 정확히 c리터를 만들 수 있는지 구해라.
 * 테스트케이스 T 후에
 * a, b, c가 차례로 주어진다.
 */
// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n)
const input = [
  '2',
'5 3 4',
'3 6 4',
]
const solution = (a, b, c ) => {
  console.log(a, b, c)
  const getGCD = (a, b) =>b>0 ? getGCD(b, a%b) : a;
  if(c>a && c>b) return "NO"
  else if(c===a || c===b) return 'YES';
  else{
    const gcd = getGCD(a,b)
    if(c%gcd===0) return "YES";
    else return "NO"
  }
}

const T = Number(input.shift())
for(let t=0;t<T;t++){
  const [a,b,c] =input[t].split(' ').map(Number)
  console.log(solution(a,b,c))
}

// c가 a, b보다 크면 불가능
// c가 a나 b와 동일하면 가능
// a,b,의 최대 공약수가 c의 공약수면 가능
// a,b가 서로소이면 둘 중 큰 수 이하의 모든 수를 만듬.
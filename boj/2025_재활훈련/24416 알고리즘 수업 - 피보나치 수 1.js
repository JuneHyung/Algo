/**
 * 24416 알고리즘 수업 - 피보나치 수 1
 * 피보나치수를 재귀호출과 프로그래밍으로 구하는 알고리즘을 배웠다.
 * 의사코드를 이용해 n의 피보나치 수를 구할 경우 코드1과 2의 실행횟수 출력
 */
/**
 * code1의 실행횟수는 fib함수를 돌리면서 카운팅
 * code2의 실행횟수는 반복문 후 한번 리턴하기 때문에 처음 0과 1에 값 세팅 하는 2개를 n에서 뺀 것n-2
 */
// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '30'
const N = Number(input)

const solution = (n) => {
  let code1 = 0;
  let code2 = n-2;

  const fib = (n) =>{
    if(n===1 || n===2){code1++; return 1;}
    else { return (fib(n-1) + fib(n-2))}
  }

  fib(n);

  return `${code1} ${code2}`;
}

console.log(solution(N))
/**
 * 27433 팩토리얼2
 * 0보다 크거나 같은 큰 자연수 N, N!출력
 */
/**
 * num이 1보다작으면 1리턴.
 * 아니면 num * getFact(num-1)로 재귀
 */
// const fs =require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim()
const input = '0';
const N = Number(input);

const getFact = (num) => {
  if(num<=1)return 1;
  return num * getFact(num-1);
}

console.log(getFact(N));

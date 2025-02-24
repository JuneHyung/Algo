/**
 * 14215 세 막대
 * 각 막대의 길이는 양의 정수이다
 * 세 막대를 이용해서 넓이가 양수인 삼각형을 만들 수 있어야 한다.
 * 삼각형의 둘레를 최대로 해야 한다.
 * 
 * a, b, c가 주어졌을 떄 가장 큰 둘레르 ㄹ구하는 프로그램 작성
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = `2 2 2`;
const numList = input.split(' ').map(Number);

const solution = (numList) => {
  numList.sort((a,b)=>a-b);
  let [a, b, c] = numList;

  while(true){
    if(a+b >c) break;
    c--;
  }

  return a+b+c;
}

console.log(solution(numList));
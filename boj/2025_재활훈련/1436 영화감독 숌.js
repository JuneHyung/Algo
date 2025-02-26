/**
 * 1436 영화감독 숌
 * 종말의 수 666이 적어도 3개 이상 연속으로 들어가는 수
 * N번쨰 종말의 수 구하기
 * n은 1만까지
 */
// const fs = require('fs')
// const input = fs.readFileSync("/dev/stdin").toString().trim()
const input = 187;
const N = Number(input);

// 1 666
// 2 1666
// 3 2666
// 4 3666
// 5 4666
// 6 5666
// 7 6660
// 8 6661
// 9 6662
// 10 6663
// 11 6664


const solution = (n) => {
  let title = 665
  while(true){
    title++;
    if(title.toString().includes('666')){
      n--;
    }

    if(n===0) return title;
  }
}

console.log(solution(N));
/**
 * 2447 별 찍기 -10
 * ***
 * * *
 * ***
 * 모양으로 찍기.
 * N은 3의 거듭제곱이며 거듭제곱은 1~7까지
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '27';
const N = Number(input);

const solution = (n) => {
  let result = '';
  
  const makeStar = (i, j) => {
    if(i%3===1 && j%3===1){
      result+= ' ';
    }else{
      if(Math.floor(i/3)===0 && Math.floor(j/3)===0)  result+= '*';
      else makeStar(Math.floor(i/3), Math.floor(j/3));
    }
  }

  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      makeStar(i, j);
    }
    result += '\n';
  }
  return result;
}

console.log(solution(N))
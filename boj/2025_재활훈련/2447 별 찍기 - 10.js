/**
 * 2447 별 찍기 - 10
 * 재귀적인 패턴으로 별을 찍자.
 * N이 3의 거듭제곱일 때 크기 N의 패턴은 NxN정사각형 모양.
 * 크기3의 패턴은 가운데 공백이 있고, 가운데 제외한 모든 칸에 별이 하나씩 있다.
 */
/**
 * 아래에 비어있는 것들 규칙을 찾기 위해 적어놨지만 방법을 모르겠어서 GPT도움
 * 
 * x%3===1 || y%3===1 인 항목들
 * (1,1), (1,4), (1,7), (4,1), (4,4), (4,7), (5,1), (5,4), (5,7), (7,1), (7,4), (7,7)
 * 
 * 모르겠는건 중간에 큰 공백은 어떻게?
 * 가장 작은 패턴 (3x3)인지 확인.
 * 기본 패턴은 3x3.
 * 3으로 나누며 더 작은 패턴이 있는지 확인. => 재귀
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '9'
const N = Number(input);

const solution = (n) => {
  let result = '';

  const checkStar = (i, j) => {
    if(i%3===1 && j%3===1) result+=' ';
    else{
      if(Math.floor(i/3)===0 && Math.floor(j/3)===0) result+='*';
      else checkStar(Math.floor(i/3), Math.floor(j/3));
    }
  }

  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      checkStar(i, j);
    }
    result+='\n'
  }

  return result
}

console.log(solution(N));

/* n = 9
   0 1 2 3 4 5 6 7 8
0  * * * * * * * * *
1  *   * *   * *   *
2  * * * * * * * * *
3  * * *       * * *
4  *   *       *   *
5  * * *       * * *
6  * * * * * * * * *
7  *   * *   * *   *
8  * * * * * * * * *

(1,1) (1,4) (1,7)
(3,3) (3,4) (3,5)
(4,1) (4,3) (4,4) (4,5) (4,7)
(5,3) (5,4) (5,5)
(7,1) (7,4) (7,7)
*/
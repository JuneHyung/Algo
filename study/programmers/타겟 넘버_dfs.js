/**
 * 타겟 넘버
 * N개 음이 아닌 정수들이 있다.
 * 순서를 바꾸지 않고 더하거나 빼서 타겟넘버를 만들려한다.
 * 
 * 주어지는 숫자 개수는 2~20개
 * 각 숫자는 1~50 자연수
 * 타겟넘버는 1~1000 자연수
 * 
 * 타겟넘버를 만들 수 있는 방법의 수를 구하기
 */

const solution = (numbers, target) => {
  let answer = 0;

  const first = numbers[0];

  const dfs = (sum, idx) =>{
    if(idx===numbers.length-1){
      if(sum===target){
        answer+=1;
      }
      return;
    }

    const nIdx = idx+1;
    dfs(sum+numbers[nIdx], nIdx);
    dfs(sum-numbers[nIdx], nIdx);
  }

  dfs(first, 0);
  dfs(-1*first, 0);

  return answer;
}

const numbers = [1, 1, 1, 1, 1]
const target = 3;
console.log(solution(numbers, target))
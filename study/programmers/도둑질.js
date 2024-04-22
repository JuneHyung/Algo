/**
 * 도둑질
 * 인접한 집들과 방범장치가 되어있다. 집들은 원형.
 * money가 주어질 때 훔칠 수 있는 최댓값 구하기
 * 
 * 첫번째 집을 방문한 경우와 그렇지 않은 경우로 나누기.
 */

const solution = (money) => {
  const n = money.length;
  const firstSteal = Array.from({length:n},()=>0)
  const firstNoSteal = Array.from({length:n},()=>0)
  
  // 첫집을 털었을 때
  firstSteal[0] = money[0];
  firstSteal[1] = money[0];

  // 첫집을 털지 않았을 때
  firstNoSteal[0] = 0;
  firstNoSteal[1] = money[1];

  for(let i=2; i<n;i++){
    firstSteal[i] = Math.max(firstSteal[i-2]+money[i], firstSteal[i-1])
    firstNoSteal[i] = Math.max(firstNoSteal[i-2]+money[i], firstNoSteal[i-1])
  }
  const answer = Math.max(firstSteal[n-2], firstNoSteal[n-1])
  return answer;
}

const money = [1, 2, 3, 1];
console.log(solution(money))
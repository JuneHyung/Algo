/**
 * k = 최상점, 1 = 최하점
 * 한상자에 m개씩인데 상자의 가장 낮은 점수가 p
 * 가격은 p*m
 * 가장 많은 사과를 팔때 얻을 수 있는 최대 이익
 * 상자단위로 팔고 남는건 버림
 */

 function solution(k, m, score) {
  let answer = 0;
  score.sort((a,b)=>a-b);
  while(score.length>=m){ // 한상자에 m개씩
    let result = [];
    for(let i=0;i<m;i++){
      result.push(score.pop())
    }
    answer += Math.min(...result)*m;
  }
  return answer;
}


const k = 3;
const m = 4;
const score = [1, 2, 3, 1, 2, 3, 1];
console.log(solution(k, m, score));
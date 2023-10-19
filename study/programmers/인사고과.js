/**
 * 인사고과
 * 1년간 인사고과에 따라 인센티브를 지급합니다.
 * 각 사원마다 근무 태도 점수 a와 동료 평가 점수 b가 기록되있는데 
 * 어떤 사원이 다른 임의 사원보다 점수가 모두 낮은 경우 그 사원은 못받는다.
 * 그렇지 않은 사원들에 대해 두 점수 합이 높은 순으로 석차를 내어 석차에 따라 인센티브가 차등지급된다.
 * 두 점수 합이 동일하면 동일한 만큼 석차는 건너뛴다.
 * 완호의 석차를 return하시오.
 * 
 * scores[0]은 완호의 점수다.
 * 못 받는 경우 -1 return
 * 
 * 1. 가능여부를 먼저 체크 후, 합배열을 구해 wanho와 같은 index를 찾아 +1하는 방식. => tc 3개 시간초과
 * 2. scores를 돌면서, 완호점수가 둘다 작으면 바로 -1return하고, 아니면 sum조건 체크 후 가능한 사람이면 answer+1 => tc 24 시간초과
 * 3. 합이 wanho꺼보다 큰 배열들을 구해서 그 배열들만 체크하여 불가능한 것이면 1씩 빼는 방식.
 */
const solution = (scores) => {
  const n = scores.length;
  
  // wanho가 못받을 친구면 -1 바로 return
  for(let i=1; i<n;i++){ 
    if(scores[0][0] < scores[i][0] && scores[0][1] < scores[i][1]) return -1;
  }

  // wanho보다 큰 사원들만 필터링
  const wanho = scores[0][0] + scores[0][1];
  scores = scores.filter(el=> el[0]+el[1] > wanho);

  let answer = scores.length+1;

  // 필터링한 score를 돌면서 통과 봇하는 친구들이면 -1.
  for(let i=0;i<scores.length;i++){
    for(let j=0; j<scores.length;j++){
      if(i===j) continue;
      if(scores[i][0] < scores[j][0] && scores[i][1] < scores[j][1]){ answer--;break;}
    }
  }
  

  return answer;

}

const scores = [[2, 2], [1, 4], [3, 2], [3, 2], [2, 1]]
console.log(solution(scores))
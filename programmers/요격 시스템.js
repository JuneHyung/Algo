/**
 * 요격 시스템
 * x축에 평행한 직선형태이며, x좌표에서 y축에 수평이되도록 미사일을 발사함. (s, e)형태
 * 요격에 필요한 최소 미사일 갯수 린턴
 */

const solution = (targets) => {
  let answer = 0;
  let end = 0;

  targets.sort((a,b)=>a[1] - b[1]);

  for(const [s, e] of targets){
    if(s<end) continue;
    else{
      end = e;
      answer++;
    }
  };

  return answer;
}

const targets = [[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]];
console.log(solution(targets))
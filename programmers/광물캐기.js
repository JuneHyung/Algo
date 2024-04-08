/**
 * 광물 캐기
 * 다이아, 철, 돌 곡괭이를 0~5개까지 가지고있다.
 * 캘때 피로도 소모된다.
 * 다이아곡
 * 다이아: 1
 * 철: 1
 * 돌: 1
 *
 * 철곡
 * 다이아: 5
 * 철: 1
 * 돌: 1
 *
 * 돌곡
 * 다이아: 25
 * 철: 5
 * 돌: 1
 * 종류 상관없이 5개 캐면 사용X
 *
 * 규칙
 * 사용할 수 있는 곡괭이중 아무거나 하나를 선택해 광물을 캡니다.
 * 한 번 사용하기 시작한 곡괭이는 사용할 수 없을 때까지 사용합니다.
 * 광물은 주어진 순서대로만 캘 수 있습니다.
 * 광산에 있는 모든 광물을 캐거나, 더 사용할 곡괭이가 없을 때까지 광물을 캡니다.
 * 작업을 끝내기까지 필요한 최소한의 피로도 리턴
 * */
function solution(picks, minerals) {
  let answer = 0;
  const mine = [];

  minerals = minerals.slice(0,picks.reduce((a,c) => a+5*c,0))
  const pick = [
    {"diamond":1, "iron": 1, "stone": 1},
    {"diamond":5, "iron": 1, "stone": 1},
    {"diamond":25, "iron": 5, "stone": 1},
  ]
  for(let i=0; i<minerals.length; i+=5){
    mine.push(minerals.slice(i, i+5));
  }

  const getCnt = (arr, target) => arr.filter(el=>el===target).length;

  mine.sort((a,b)=>{
    const aDiaCnt = getCnt(a, 'diamond');
    const bDiaCnt = getCnt(b, 'diamond');
    if(aDiaCnt===bDiaCnt){
      const aIronCnt = getCnt(a, 'iron');
      const bIronCnt = getCnt(b, 'iron');
      return bIronCnt - aIronCnt;
    }
    return bDiaCnt - aDiaCnt;
  })

  const [diaPick, ironPick, stonePick] = picks;

  // 초기 시작 정하기.
  let idx = diaPick !==0 ? 0 : ironPick !==0 ? 1 : 2;
  
  for(const m of mine){

    const sum = m.reduce((a,c) => a+pick[idx][c], 0);
    // console.log(sum)
    answer+=sum;

    if(--picks[idx]<=0){ // 다 쓰면, 다음 곡괭이로 이동.
      idx++; 
    }
    if(picks.every(el=>!el)){ 
      return answer;
    }
    // console.log(picks);

  }

  return answer;

}
const picks = [0, 0, 1];
const minerals = ["stone", "stone", "stone", "stone", "stone", "diamond"];
console.log(solution(picks, minerals));

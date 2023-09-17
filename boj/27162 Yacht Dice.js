/**
 * 27162 Yacht Dice
 * 플레이어는 주사위 5개를 굴린다.
 * 이후 원하는 주사위를 고정시키고, 남은 주사위를 다시 굴리는 걸 2번 이하로 할 수 있다.
 * 굴려 나온 조합으로 아래 족보 이전까지 선택하지 않은 하나를 선택해 점수 기록.
 * 
 * Ones : 1 총합
 * ~ Sixes : 6 총합
 * Four of a Kind : 동일한 주사위 눈이 4개 이상 => 동일한 주사위 눈 4개의 총합 아니라면 0
 * Full House : 주사위눈이 2종류이며, 한 종류는 3, 다른 종류는 2개일때 주사위 눈 5개의 총합. 아니면 0
 * Little Straight : 12345 => 30 아니면 0
 * Big Straight : 23456 => 30 아니면 0
 * Yacht : 주사위눈이 다 똑같다면 50 아니면 0
 * Choice : 모든 주사위 눈의 총합.
 * 
 * 모든 플레이어의 모든 족보가 사용되면 게임 끝.
 * 지금은 한별이 차례
 * 한별이는 첫번째로 굴린 주사위 조합에서 3개의 주사위를 고정하고 나머지 2개를 다시 굴려야한다.
 * 이 상황에서 나올 수 있는 점수최대값은?
 * 
 * 첫 줄에 현재 족보상태를 준다. Y면 선택가능 N이면 선택불가능.
 * 두번째줄에 첫번째로 굴린 조합에서 고정한 주사위 눈들의 눈의 수를 나타낸다.
 * 1~6사이 정수 3개가 공백으로 주어짐.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input= [
//   'YYYYYNYYNYNN',
// '4 5 1',
// ]
const input= [
  'NNNNNNNYNNNN',
'4 4 4',
]
const INFO = input.shift().split('')
const FIXED = input.shift().split(' ').map(Number);

const checkScore = (idx, fixed) =>{
  const kind = new Set(fixed);
  // console.log([...kind])
  switch(idx){
    case 0:
      return fixed.filter(el=>el===1).length*1 + 2;
    case 1:
      return fixed.filter(el=>el===2).length*2 + 4;
    case 2:
      return fixed.filter(el=>el===3).length*3 + 6;
    case 3:
      return fixed.filter(el=>el===4).length*4 + 8;
    case 4:
      return fixed.filter(el=>el===5).length*5 + 10;
    case 5:
      return fixed.filter(el=>el===6).length*6 + 12;
    case 6:
      let max = 0;
      // 4카드
      for(let i=0;i<3;i++){
        const c = fixed[i];
        const cnt = fixed.filter(el=>el===c).length;
        if(cnt+2>=4) max = Math.max(max, c*4)
        else continue;
      }
      return max;
    case 7:
      // full house
      if(kind.size>2) return 0;
      else if(kind.size===2){
        const max = Math.max(...kind);
        const min = Math.min(...kind);
        return max*3 + min*2;
      }else{
        const cur = [...kind][0]
        return cur===6 ? cur*3 + 5*2 : cur*3 + 6*2;
      }
    case 8:
      // small staright
      return kind.size<3 ? 0 : fixed.includes(6) ? 0 : 30  
    case 9:
      // big straight
      return kind.size<3 ? 0 : fixed.includes(1) ? 0 : 30  
    case 10:
      // yacht
      return (kind.size===1) ? 50 : 0
    case 11:
      // choice
      return fixed.reduce((a,b)=>a+b, 0) + 12
  }
}

const solution = (info, fixed) => {
  let max = 0;
  for(let i=0;i<12;i++){
    const cur = info[i];
    if(cur==='Y'){
      console.log(cur, i)
      max = Math.max(max, checkScore(i, fixed))      
      // console.log(max)
    }
    else continue;
  }
  return max;
}

console.log(solution(INFO, FIXED))
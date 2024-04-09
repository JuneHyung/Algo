/**
 * 붕대 감기
 * t초 동안 붕대를 감으며 1초마다 x만큼 회복
 * t초 연속 붕대감는데 성공하면 y만큼 추가로 회복
 * 현재 체력보다 커지는건 불가능
 * 
 * 기술쓰는도중 공격당하면 기술취소.
 * 공격당하는 순간 체력회복x
 * 공격당해 기술이 취소당하거나 기술이 끝나면 즉시 붕대감기를 다시 사용. 연속성공시간은0
 * 
 * 공격받으면 피해량만큼 체력줄어들고, 0이하면 죽음.
 * 
 * 모든 공격이 끝난 직후 남은 체력을 return
 * 죽게되면 -1 리턴
 * 
 * bandage = [시전시간, 초당 회복량, 추가 회복량]
 * attacks = [공격시간, 피해랑] 오름차순 정렬된형태.
 */

function solution(bandage, health, attacks) {
  var answer = 0;
  const lastTime = attacks[attacks.length-1][0];

  const [bTime, bHeal, bAddHeal] = bandage;

  let aIdx = 0;
  let continueCnt = 0;
  let curHealth = health;

  for(let i=1;i<=lastTime;i++){
    const [aTime, aDamage] = attacks[aIdx];
    if(aTime===i){
      if(curHealth-aDamage <= 0) return -1;
      else curHealth -= aDamage;
      continueCnt=0;
      aIdx++;
    }else{
      if(curHealth+bHeal<=health){
        curHealth+=bHeal;
      }else{
        curHealth = health;
      }
      continueCnt++;
      if(continueCnt===bTime){
        if(curHealth+bAddHeal<=health){
          curHealth+=bAddHeal;
        }else{
          curHealth = health;
        }
        continueCnt = 0;
      }
    }
    console.log(curHealth, continueCnt)
  }

  return curHealth;
}
const bandage = [2, 4, 4]
const health = 100
const attacks =  [[1, 96], [18, 1]]
console.log(solution(bandage, health, attacks))
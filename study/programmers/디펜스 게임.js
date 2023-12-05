/**
 * 디펜스 게임
 * 처음 n명의 병사를 가지고 있다.
 * 매 라운드마다 enemy[i]마리의 적이 등장.
 * 남은 병사중 enemy[i]만큼 소모해 적을 막을 수 있다.
 * 남은병사수 보다 현재 라운드 적의 수가 더 많으면 종료.
 * 
 * 무적권이란 스킬이 있고, 무적권을 쓰면 병사 소모없이 한 라운드의 공격을 막을 수 있다.
 * 최대 k번 사용가능.
 * 
 * 최대 몇라운드 막을 수 있는지 return
 * 1, 가장 큰 숫자들을 k만큼 잘라내서, answer도출. => n은 더 진행못하는데 k가남는경우가 생겨서 실패
 * 2.
 */

const solution = (n, k, enemy) => {
  const sum = enemy.reduce((a,c)=>a+c, 0)
  if(n >= sum || k >=enemy.length) return enemy.length;

  let lt = 0;
  let rt = enemy.length;
  while(lt<=rt){
    const mid = Math.floor((lt+rt)/2);
    const slicedEnemy = enemy.slice(0, mid).sort((a,b)=>b-a); // 큰놈부터 제거하기위해 정렬
    // console.log(lt, rt, mid, slicedEnemy,)

    // let god = k;
    let remain = 0;
    for(let i=k;i<slicedEnemy.length;i++){
      // if(god > 0) god--;
      // else remain+=slicedEnemy[i];
      remain+=slicedEnemy[i];
    }
  
    if(n>=remain && god>=0) lt = mid+1;
    else rt = mid-1;
  }
  return lt-1;
}

const n = 7;
const k = 3;
const enemy = [4, 2, 4, 5, 3, 3, 1];
// const n = 2;
// const k = 4;
// const enemy = [3, 3, 3, 3];
console.log(solution(n, k, enemy))
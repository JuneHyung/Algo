/**
 * 택배 배달과 수거하기
 * n개 집에 택배배달가려한다. 같은 크기 재활용택배상자에 담아 배달. 배달하면서 빈 재활용 택배 상자들을 수거하려함.
 * 
 * 배달할 거는 모두 재활용 택배 상자에 담겨 물류창고에 보관되있고, i번째 집은 물류창고에서 거리 i만큼 떨어져 있다.
 * 모두 재활용택배상자에 담겨서 물류창고에 보관되어있고, i번째 집은 물류창고에서 거리 i만큼 떨어져 있다.
 * i번째 집은 j번째 집과 거리 j-i만큼 떨어져 있다. 거리=1
 * 
 * 트럭에는 cap개 실을 수 있다.
 * 각 집마다 배달할 상자개수와 수거할 상자 개수를 알 때, 트럭 하나로 모든 배달과 수거를 마치고 물류창고까지 돌아올 수 있는 최소 이동거리 구하기.
 * 각 집에 배달 및 수거 시 원하는 개수만큼 배달 및 수거 가능.
 * 
 * 뒤에서 부터 가득 채워 배달하고, 수거하기.
 * * 배달/수거 왕복횟수 중 높은 것이 해당 인덱스의 방문횟수
 * * 공간이 남으면 앞쪽 인덱스에 존재하는 화물을 추가처리.
 * 
 * 상자의 수 % cap을 했을 때 0이 되지 않으면 추가 방문
 * 1. 시간초과
 */

const solution = (cap, n, deliveries, pickups) => {
  let answer = 0;
  // 뒤에서 부터
  for(let i=n-1;i>=0;i--){

    const deli = deliveries[i];
    const pick = pickups[i];

    // 방문횟수
    let deliCnt = deli===0 ? 0 : Math.ceil(deli/cap)
    let pickCnt = pick===0 ? 0 : Math.ceil(pick/cap)

    if(deliCnt===0 && pickCnt===0) continue;

    // 최대 방문횟수.
    let visit = Math.max(deliCnt, pickCnt);
    answer += visit * (i+1) * 2;

    // 배달 가능 상자와 수거 가능 상자
    let deliBox = visit*cap;
    let pickBox = visit*cap;

    for(let j=i;j>=0;j--){
      if(deliBox<=0) break;
      if(deliBox>0){ // 운반 가능 할때 그전꺼 뺴두기
        const box = Math.min(deliBox, deliveries[j])
        deliveries[j] -= box;
        deliBox -= box;  
      }
    }

    for(let j=i;j>=0;j--){
      if(pickBox<=0) break;
      if(pickBox>0){ // 운반 가능 할때 그전꺼 뺴두기
        const box = Math.min(pickBox, pickups[j])
        pickups[j] -= box;
        pickBox -= box;  
      }
    }
  }
  return answer;
}


const cap = 4;
const n =5
const deliveries = [1, 0, 3, 1, 2]
const pickups = [0, 3, 0, 4, 0]

console.log(solution(cap, n, deliveries, pickups))
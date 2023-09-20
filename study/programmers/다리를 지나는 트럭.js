/**
 * 다리를 지나는 트럭
 * 모든 트럭이 다리를 거넌려면 최소 몇초가 걸리는가?
 * 다리는 최대 bridge_length대 올라갈 수 있고, weight이하까지 무게를 견딜 수 있다.
 * 모든 트럭이 건너려면 최소 몇초가 걸리는지 리턴
 */
const solution = (bridge_length, weight, truck_weights) => {
  const bridge = [];
  let sum = 0;
  let time = 0;

  truck_weights = truck_weights.reverse();

  while(truck_weights.length>0){
    time++;
    const cur = truck_weights[truck_weights.length-1]
    if(bridge.length===bridge_length){sum-=bridge.shift()} // 다차면 truck 지나감
    if(sum+cur > weight){bridge.push(0); continue;} // weight넘어가면 못올라가니 0 추가
    const truck = truck_weights.pop(); // 올라갈 수 있으면 트럭 올라감.
    bridge.push(truck)
    sum+= truck
  }
  console.log(time ,bridge)
  return time + bridge_length;
}

const bridge_length = 2;
const weight =10;
const truck_weights= [7,4,5,6]

console.log(solution(bridge_length, weight, truck_weights))
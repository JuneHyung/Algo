/**
 * 가장 많이 받은 선물
 * 당므달에 누가 많이 받을지 예측
 * 
 * 두 사람 사이에 더 많은 선물을 준 사람이 다음달에 선물을 하나 받음.
 * 두 사람이 선물을 주고받은 기록이 없거나 같다면, 선물지수가 더 큰 사람이 선물지수가 작은 사람에게 선물을 받습니다.
 * 선물지수는 이번 달 까지 자신이 친구들에게 준 선물의 수에서 받은 선물의 수를 뺀 값
 * 선물지수도 같으면 주고받지 않음.
 * 
 * 다음달에 선물을 주고받을 떄 가장 많이 받을 친구가 받을 선물의 수 구하기
 */

const solution = (friends, gifts) => {
  const n = friends.length;
  const give = {}
  const receive = {}
  const point = {};
  const graph = new Map();

  const makeInitialState = () => {
    const initialState = {}
    for(let i=0;i<n;i++) initialState[friends[i]] = 0;
    return initialState;
  }
  // 초기값 세팅
  for(const f of friends){
    give[f] = 0;
    receive[f] = 0;
    graph.set(f, makeInitialState())
  }

  // 준선물 받은선물 게산
  for(const gift of gifts){
    const [g, r] = gift.split(' ')
    give[g]++;
    receive[r]++;
  }
  // 선물지수 계산
  for(let i=0;i<n;i++){
    const cur = friends[i]
    point[cur] = give[cur] - receive[cur];
  }

  // graph 정보 입력
  for(const gift of gifts){
    const [g, r] = gift.split(' ')
    const giveInfo = graph.get(g)

    giveInfo[r]+=1;

    graph.set(g, giveInfo)
  }


  console.log(graph)
  console.log(give)
  console.log(receive)
  console.log(point)

  const answer = makeInitialState();

  for(let i=0;i<n;i++){
    const lt = friends[i];
    const ltInfo = graph.get(lt); // 준사람
    
    for(let j=0;j<n;j++){
      if(i===j) continue; // 본인이 본인에게 X
      let rt = friends[j]; // 받은사람쪽
      const rtInfo = graph.get(rt);

      // 큰쪽이 선물을 받고
      if(ltInfo[rt] < rtInfo[lt]){
        answer[rt]+=1;
      }else if(ltInfo[rt] > rtInfo[lt]){
        answer[lt]+=1;
      } else if( ltInfo[rt]===rtInfo[lt] || ltInfo[rt]===0 && rtInfo[lt]===0){ // 같거나 주고받은경우 없으면
        // 포인트가 큰 쪽이 받는다.
        if(point[lt] > point[rt]) answer[lt]+=1;
        else if(point[lt] < point[rt]) answer[rt]+=1;
        else continue;
      }else continue;
    } 
    // console.log(graph)
  }
  console.log(answer)
  return Math.max(...Object.values(answer))/2
}


const friends = ["muzi", "ryan", "frodo", "neo"]
const gifts = ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]

// const friends =	["joy", "brad", "alessandro", "conan", "david"]
// const gifts = ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]
console.log(solution(friends, gifts))
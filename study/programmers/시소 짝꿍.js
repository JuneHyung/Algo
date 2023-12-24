/**
 * 시소 짝꿍
 * 탑승한 사람의 무게와 시소 축과 좌석 간의 거리의 곱이 양쪽 다 같다면 시소 짝꿍
 * 짝꿍이 몇쌍인지 세기
 * 거리는 2, 3, 4
 * 
 * 1. 경우의 수가 몇개 안되서 2배 3배 4배한 배열들을 만들어서 각각 비교. => 시간초과
 * 2. 풀이참고
 * 
 * 11(22, 33, 44), 23, 24, 34
 */

const solution = (weights) => {
  let answer = 0;
  const store = {}; // 갯수 저장
  const rate = [1, 2, 3/2, 4/3];

  weights.sort((a,b)=> b-a);

  for(let i=0;i<weights.length;i++){
    const w = weights[i]; // 현재 무게
    let s = 0;

    for(let j=0;j<4;j++){
      const r = rate[j];
      s = w*r;
      console.log(w, s)
      if(store.hasOwnProperty(s)){ 
        console.log(s)
        answer+=store[s]
      }
    }
    if(!store[w]) store[w] = 1;
    else store[w]++;
    console.log(store)
    console.log()
  }
  console.log(store)
  return answer;
}
const weights =	[100, 180, 360, 100, 270]
console.log(solution(weights))
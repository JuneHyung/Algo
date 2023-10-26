/**
 * 귤 고르기
 * 수확한 귤 중 k개 골라 상자 하나에 담아 판매하려한다.
 * 귤의 크기가 일정하지 않아 크기별로 분류했을 떄 서로 다른 종류의 수를 최소화 하고 싶다.
 * 한 상자에 담으려는 귤 개수 k와 귤의 크기를 담은 배열 tangerine이 매개변수로 주어진다.
 * k개 고를때 크기가 서로 다른 종류의 수 최소값을 return
 */
// const solution = (k, tangerine) => {
//   const tangSize = new Map();
//   for(let i=0; i<tangerine.length;i++){
//     const size = tangerine[i];
//     if(tangSize.has(size)) tangSize.set(size, tangSize.get(size)+1)
//     else tangSize.set(size, 1);
//   }

//   const entries = [...tangSize.entries()].sort((a,b)=> b[1] - a[1]).map(el=>el[1]);
//   // console.log(entries)
//   let sum= 0;
//   let answer = 0;
//   for(let i=0;i<entries.length;i++){
//     if(sum + entries[i] < k){
//       sum+=entries[i];
//       answer++;
//     }else{
//       return answer+1;
//     }
//   }
// }
const solution = (k, tangerine) => {
  const tangSize = {}

  // 신기하네
  tangerine.forEach((s)=> tangSize[s] = (tangSize[s] || 0) +1);
  console.log(tangSize)
  const values = Object.values(tangSize).sort((a,b)=>b-a);
  
  let answer = 0;
  for(const v of values){
    answer++;
    if(k>v) k-=v;
    else break;
  }
  return answer;
}

const k = 2;
const tangerine =[1, 1, 1, 1, 2, 2, 2, 3]
// const k = 6;
// const tangerine = [1, 3, 2, 5, 4, 5, 2, 3]

console.log(solution(k, tangerine))
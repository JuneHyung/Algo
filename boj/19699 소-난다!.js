/**
 * 19699 소-난다!
 * 농장에 N마리 소가 있다.
 * 농부 존은 소들의 몸무게의 합이 소수가 되도록 M마리 소를 선별할 계획이다.
 * 나올수 있는 몸무게의 합을 모두 출력.
 * 
 * 소들의 수 N, 설별할 소의 수 M이주어진다.
 * 소들의 몸무게가 주어진다.
 * 
 * M마리 소들의 몸무게 합으로 만들 수 있는 모든 소수를 오름차순으로 출력.
 * 그런경우가 없다면 -1
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5 3',
'2 4 10 5 8',
]
const [N, M] = input.shift().split(' ').map(Number)
const COWS = input.shift().split(' ').map(Number)

const getCombi = (cows, m) =>{
  if(m===1) return cows.map(el=>[el])
  const result = [];
  cows.forEach((fixed, idx, origin)=>{
    const rest = origin.slice(idx+1);
    const combi = getCombi(rest, m-1);
    const attach = combi.map(el=>[fixed, ...el])
    result.push(...attach)
  })
  return result;
}
const solution  = (n, m, cows) =>{
  // console.log(getCombi(cows, m));
  const arr = [...new Set(getCombi(cows, m).map(el=>el.reduce((a,c)=>a+c,0)))].sort((a,b)=>a-b);

  const max = arr[arr.length-1];
  const notPrime = {1:true};
  for(let i=2;i<=Math.ceil(Math.sqrt(max)); i++){
    if(notPrime[i]) continue;
    for(let j=i**2;j<=max;j+=i){
      // if(notPrime[j]) continue;
      notPrime[j] = true;
    }
  }

  const answer = [];
  for(const item of arr){
    if(notPrime[item]===undefined) answer.push(item)
  }

  // console.log(arr)
  // console.log(notPrime)
  // console.log(answer)

  return answer.length===0 ? -1 : answer.join(' ')
}

console.log(solution(N, M, COWS))
/**
 * 20207 달력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '7',
'2 4',
'4 5',
'5 7',
'5 6',
'11 12',
'7 9',
'12 12',
]
const N = Number(input[0])
const INFO = input.slice(1).map(el=>el.split(' ').map(Number));
const solution = (n, info) =>{
  info.sort((a,b)=> {
    if(a[0] > b[0]) return 1;
    else if(a[0] < b[0]) return -1;
    else if(a[1] > b[1]) return 1;
    else if(a[1] < b[1]) return -1;
    else return 0;
  })

  const max = Math.max(...info.flat(2));
  const graph = Array.from({length: max+2},()=>0);

  for(let i=0;i<n;i++){
    const [a, b] = info[i];
    for(let j=a;j<=b;j++){
      graph[j]+=1;
    }
  }

  let flag = false, len = 0, height=0;
  let answer = 0;
  console.log(graph)
  for(let i=0;i<=max+1;i++){
    if(graph[i]===0){
      answer += len*height;
      console.log(len, height, answer)
      len = 0;
      height = 0;
      flag = false;
    }else flag = true;

    if(flag){
      if(height<graph[i]) height = graph[i];
      len++;
    }
  }

  return answer
}

console.log(solution(N, INFO))
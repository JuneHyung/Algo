function solution(n, computers) {
  let answer=0;
  const chk = Array.from({length:n}, ()=>false);

  const DFS = (L) => {
    chk[L]=true;
    for(let i=0;i<n;i++){
      if(computers[L][i]===1 && !chk[i]){
        DFS(i);
      }
    }
  }

  for(let i =0;i<n;i++){
    if(!chk[i]){
      DFS(i);
      answer++;
    }
  }
  return answer;
}

const n = 3;
const computers = [[1, 1, 0],[1, 1, 0],[0, 0, 1]];
console.log(solution(n, computers));
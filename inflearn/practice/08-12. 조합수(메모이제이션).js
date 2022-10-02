const solution = (n, r) => { 
  let answer = 0;
  // n==r || r==0 return 1;

  let dy = Array.from(Array(35), ()=>Array(35).fill(0))
  const DFS = (n, r) => { 
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return dy[n][r]=DFS(n - 1, r - 1) + DFS(n - 1, r);
  }

  answer = DFS(n, r);
  return answer;
}
            
// console.log(solution(5, 3));
console.log(solution(33, 19));

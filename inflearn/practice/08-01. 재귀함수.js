// const dfs = (n, num, answer) => { 
//   if (num > n) return answer;
//   else {
//     answer.push(num);
//     return dfs(n, num + 1, answer);
//   }
// }
// const solution = (n) => { 
//   let answer = [];
//   return dfs(n, 1, answer);
// }

const solution = (n) => { 
  function DFS(L) { 
    if (L == 0) return;
    else { 
      DFS(L - 1);
      console.log(L);
    }
  }
  
  DFS(n);
}
console.log(solution(8))